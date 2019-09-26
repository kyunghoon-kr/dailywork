# -*- coding:utf-8 -*-

from bs4 import BeautifulSoup
import requests
import datetime

# 오늘날짜
today = datetime.datetime.now()

count = 0
db_list = []
# userAgency 설정을 위한 head 설정
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)     Chrome/37.0.2049.0 Safari/537.36'
}
# requests 이용
req = requests.get('http://efamily.scourt.go.kr/index.jsp', headers=headers)
html = req.text
soup = BeautifulSoup(html, 'html.parser')

# 공지사항 리스트를 뽑아온다
notice_list = soup.find('div', {'class', 'notice'}).find_all('li', {'class', 'con'})
# 날짜 리스트를 뽑아온다
date_list = soup.find('div', {'class', 'notice'}).find_all('li', {'class', 'date'})
# 오늘날짜인지 확인하기
for i in range(len(date_list)):
    if date_list[i].get_text().strip() == today.strftime("%Y.%m.%d"):  # 오늘 날짜와 일치하는 공지만 출력
        print(date_list[i].get_text().strip(), "\n", notice_list[i].get_text().strip())

