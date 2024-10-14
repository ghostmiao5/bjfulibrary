import logging

import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

globel_token = None
def selenium_login(url, username, password):
    service = Service(ChromeDriverManager().install())
    options = webdriver.ChromeOptions()
    # options.add_argument("--headless")  # 可以先不启用无头模式，便于调试观察
    driver = webdriver.Chrome(service=service, options=options)


    driver.get(url)

    # 增加初步等待时间确保页面加载完全
    #time.sleep(10)

    # 打印当前页面源码以调试
    #print(driver.page_source)

    # 假设输入元素在iframe中，首先判断并切换到iframe
    iframes = driver.find_elements(By.TAG_NAME, 'iframe')
    if iframes:
        driver.switch_to.frame(iframes[0])

    # 等待用户名输入框出现
    username_input = WebDriverWait(driver, 0).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/form/div[3]/div[2]/div/div[3]/input[1]"))
    )
    username_input.send_keys(username)

    # 等待密码输入框出现
    password_input = WebDriverWait(driver, 0).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/form/div[3]/div[2]/div/div[3]/input[2]"))
    )
    password_input.send_keys(password)

    # 提交登录表单
    password_input.send_keys(Keys.RETURN)
    # logging.info("sessionID",get_sessionid(webdriver.Chrome()))
    # print("sessionID",get_sessionid(webdriver.Chrome()))
    # 等待页面加载
    time.sleep(1)

    # 检查是否在期望的URL
    print(f"登录后页面的URL: {driver.current_url}")

    token = get_token(driver)
    print(token)
    fetch_protected_content(token)
    time.sleep(100)



    return token


# 获取sessionid
def get_sessionid(browser):
    # 是要从localStorage中获取还是要从sessionStorage中获取，具体看目标系统存到哪个中
    # window.sessionStorage和直接写sessionStorage是等效的
    # 一定要使用return，不然获取到的一直是None
    # get的Item不一定就叫sessionId，得具体看目标系统把sessionid存到哪个变量中
    #sessionid = self.browser.execute_script('return sessionStorage.getItem("sessionId");')

    # 另外sessionid一般都直接通过返回Set-Cookies头设置到Cookie中，所以也可以从Cookie读取
    # 获取浏览器所有Set-Cookie，返回对象是字典列表
    cookies = browser.get_cookies()

    #获取单项Cookie，是不是叫sessionId取决于系统存成什么变量，单项Cookie是字典
    cookie = browser.get_cookie("sessionId")
    cookie = cookie["value"]
    print(f"{cookies}")
    return "1231231"

# 获取token
def get_token(browser):
    # 是要从localStorage中获取还是要从sessionStorage中获取，具体看目标系统存到哪个中
    # window.sessionStorage和直接写sessionStorage是等效的
    # 一定要使用return，不然获取到的一直是None
    # get的Item不一定就叫token，得具体看目标系统把token存到哪个变量中
    token = browser.execute_script('return sessionStorage.getItem("token");')
    # print(f"{token}")
    return token


def get_Cookies():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4515.159 Safari/537.36'
    }
    url = 'https://seat.bjfu.edu.cn/libseat/#/main/book'
    session = requests.session()
    session.post(url,headers=headers)
    cookie = session.cookies
    print(cookie)
    a = cookie.get_dict()
    return a


def fetch_protected_content(token):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4515.159 Safari/537.36'
    }

    # 使用 token 构建请求 URL
    url = f'https://seat.bjfu.edu.cn/rest/v2/user?token={token}'

    response = requests.get(url, headers=headers)

    # 打印状态码和内容
    print(f"响应状态码: {response.status_code}")
    print("响应内容:")
    print(response.text)


def main():
    # 示例调用
    url = "http://cas.bjfu.edu.cn/cas/login?service=https://seat.bjfu.edu.cn/remote//static/casAuth/getServiceByVerifyTicket/casLogin"
    username = "3230304"  # 你的用户名
    password = "myz2356013"  # 你的密码
    globel_token = selenium_login(url, username, password)
    print("Cookies",
          get_Cookies())  # 输出结果为：{'X_HTTP_TOKEN': '42daf4b72327b2817495839261bf5e71415983ed09', 'user_trace_token': '20210819231227-8e195ef7-7b6c-4e9c-a77c-f806bbb0dd3c'}




    if globel_token:
        print("登录成功，获取到的token:", globel_token)
    else:
        print("未能获取到token")


if __name__ == "__main__":
    main()