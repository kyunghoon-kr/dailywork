from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import time

def func(c, d, f):
    print(f)
    ch = 1
    maxR = 0
    cnt = 3
    check = True
    str1 = ""
    p = open("output", 'r', encoding='utf8')
    a = [c]
    while True:
        rl = p.readline()
        str2 = rl.split("/")
        if not rl:
            break
        a.append(str2[1])
        #print("가져온 크기 : " + str(str2[1]))
    i = int(a[d])
    if i > 10000000:
        return changetab(c, d + 1)

    while True:
        try:
            driver.find_element_by_id('inpRecevNo').clear()
            driver.find_element_by_id('inpRecevNo').send_keys(i)
            driver.find_element_by_id('inpRecevNo').send_keys(Keys.RETURN)
            time.sleep(0.1)
            try:
                driver.switch_to.alert.accept()
            except:
                g = 1
        except:
            g = 1
        try:
            driver.find_element_by_id('inpRecevNo').clear()
            driver.switch_to.default_content()
            driver.switch_to.frame("resultFrame")
            date = driver.find_element_by_xpath('/html/body/div/div[2]/table/tbody/tr[2]/td[2]')
            ab = date.text.split('-')
            print(ab[0] + "-" + ab[1] + "-" + ab[2])
            if ab[0] == '2019':
                if i > maxR:
                    maxR = i
                    # print(str(i) + ": " + int(ab[1]), int(ab[2]), int(ab[1]) > maxM, int(ab[2]) > maxD)
                    check = False
        except:
            if not check:
                cnt += 1
                if cnt > 3:
                    str1 = " / " + str(i - ch) + "\n"
                    a = open('data.txt', 'a', encoding='utf8')
                    a.write(f + str1)
                    a.close()
                    break

        # driver.switch_to.window(driver.window_handles[0])
        driver.switch_to.default_content()
        driver.switch_to.frame("inputFrame")
        time.sleep(0.2)
        i += ch
    changetab(c, d + 1)


def changetab(a, b):
    driver.get("http://www.iros.go.kr/frontservlet?cmd=REVTWelcomeEvtC")
    driver.switch_to.default_content()
    driver.switch_to.frame("inputFrame")
    e = driver.find_element_by_css_selector("a")
    driver.execute_script("f_moveTab('1')", e)
    driver.find_element_by_xpath('//*[@id="selCourt"]/option[' + str(a) + ']').click()
    # driver.close()
    # driver.switch_to.window(driver.window_handles[-1])
    # driver.get_window_position(driver.window_handles[1])
    # f = [driver.find_element_by_xpath('//*[@id="selCourt"]/option[' + str(a) + ']').text, driver.find_element_by_xpath('//*[@id="selRegt"]/option[' + str(b) + ']').text]
    try:
        driver.find_element_by_xpath('//*[@id="selRegt"]/option[' + str(b) + ']').click()
        f = driver.find_element_by_xpath('//*[@id="selRegt"]/option[' + str(b) + ']').text
        time.sleep(1)
    except:
        b = 1
        a += 1
        print(driver.find_element_by_xpath('//*[@id="selRegt"]/option[' + str(b) + ']'))
        driver.find_element_by_xpath('//*[@id="selRegt"]/option[' + str(b) + ']').click()
        time.sleep(1)
    func(a, b, f);


options = webdriver.ChromeOptions()
# 사람처럼 보이게 하는 옵션들
options.add_argument("disable-gpu")  # 가속 사용 x
options.add_argument("lang=ko_KR")  # 가짜 플러그인 탑재
options.add_argument(
    'user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')  # user-agent 이름 설정

driver = webdriver.Chrome()
driver.get("http://www.iros.go.kr/re1/intro.jsp?smsgubun=N&sysid=PL")

c = input()
changetab(15, 1)