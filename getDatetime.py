import time
import datetime

# 获取当前时间的时间戳（秒）
timestamp_seconds = time.time()

# 将时间戳转换为毫秒
timestamp_milliseconds = int(timestamp_seconds * 1000)

print('Current timestamp in milliseconds:', timestamp_milliseconds)

# 验证转换后的时间
readable_time = datetime.datetime.fromtimestamp(timestamp_seconds)
print('Human-readable format:', readable_time)
