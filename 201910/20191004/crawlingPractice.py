# 페이스북 자동 로그인

from Selenium import webdriver

driver = webdriver.Chrome()

id = "아이디"
pwd = "패스워드"

path = "WebDriver의 경로"
driver = webdriver.Chrome(path)
driver.get("http://www.facebook.com")

elem = driver.find_element_by_id("email")
elem.send_keys(id)
elem = driver.find_element_by_id("pass")
elem.send_keys(pwd)
elem.send_keys(Keys.RETURN)