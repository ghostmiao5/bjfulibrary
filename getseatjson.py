import json
import logging
import uuid
import getDatetime
import requests
import gzip
from io import BytesIO
import brotli
url = 'https://seat.bjfu.edu.cn/rest/v2/room/stats2/1/2024-10-12?buildingId=1&date=2024-10-12&token=a02f9a852026062453584d7c2a3e8d08f5d881c912161435'
def generate_request_id():
    return str(uuid.uuid4())
xrequestid = generate_request_id()
xrequesttime = getDatetime.timestamp_milliseconds
print(f"xrequesttime {xrequesttime}")
print(f"X-request-id: {xrequestid}")
# 设置请求头
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept': 'application/json, text/plain, */*',
    'Connection': 'keep-alive',
    'Host': 'seat.bjfu.edu.cn',
    'X-request-id': xrequestid,
    'Authorization': 'a02f9a852026062453584d7c2a3e8d08f5d881c912161435',
    'X-hmac-request-key': '7a1be5a3845b8cda8359007ca838f3101c96c0617e77d4629bd2fc78f8f92161',
    'sec-ch-ua-platform': '"macOS"',
    'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    'sec-ch-ua-mobile': '?0',
    'loginType': 'PC',
    'X-request-date': str(xrequesttime),
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://seat.bjfu.edu.cn/libseat/',
    'Accept-Language': 'zh-CN,zh;q=0.9'
}

# 发送GET请求
response = requests.get(url, headers=headers)
# 检查请求是否成功
print('状态码:', response.status_code)
print('响应头:', response.headers)
# print('json:',response.content.decode('utf-8',errors='ignore'))
# print('json:',response.text)
info = response.headers.get('Content-Type')

charset = None
if 'charset=' in info:
    print(info.split('charset='))
    charset = info.split('charset=')[-1]
print(charset)
if response.status_code == 200:
    content = response.content

    # 输出原始响应内容的前几个字节
    print('原始响应内容前几十个字节:', content[:50])

    # 根据 Content-Encoding 解压缩
    encoding = response.headers.get('Content-Encoding')
    logging.error('encoding',encoding)
    if encoding == 'gzip':
        buf = BytesIO(content)
        with gzip.GzipFile(fileobj=buf) as gf:
            content = gf.read()
    elif encoding == 'br':
        try:
            content = brotli.decompress(content)
        except brotli.error as e:
            print('Brotli 解压缩失败:', e)
            print('原始内容:', content)

    try:
        # 尝试使用UTF-8解码
        decoded_content = content.decode(charset)
        print('解码成功的内容:')
        json_data = json.loads(decoded_content)
        print('格式化的JSON数据:')
        print(json.dumps(json_data, indent=4, ensure_ascii=False))
        #print(decoded_content)
    except UnicodeDecodeError:
        print('UTF-8解码失败，尝试忽略错误解码。')
        try:
            # 使用忽略错误的方式进行解码
            decoded_content = content.decode('utf-8', errors='ignore')
            print('忽略错误解码成功的内容:')
            print(decoded_content)
        except UnicodeDecodeError:
            print('即使忽略错误也无法解码，查看原始字节内容:')
            print(content)
else:
    print('请求失败，状态码:', response.status_code)
    print('返回内容:', response.text)
