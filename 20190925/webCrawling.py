from urllib.request import urlopen
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)     Chrome/37.0.2049.0 Safari/537.36'
}
# requests 이용
req = requests.get('http://efamily.scourt.go.kr/index.jsp', headers=headers)
# req = requests.get('http://efamily.scourt.go.kr/cs/CsBltnWrtList.do?bltnbordId=0000001', headers=headers)
html = req.text
soup = BeautifulSoup(html, 'lxml')