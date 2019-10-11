import requests
from bs4 import BeautifulSoup

githubId = input('아이디를 입력하세요 => ')
url = 'https://github.com/{}?tab=repositories'.format(githubId)
req = requests.get(url)
soup = BeautifulSoup(req.text, 'html.parser')

repositoriesList = soup.select('#user-repositories-list > ul')[0]
for repository in repositoriesList:
    repoName = repository.find('a')
    try:
        print(repoName.text, end='')
    except:
        pass
