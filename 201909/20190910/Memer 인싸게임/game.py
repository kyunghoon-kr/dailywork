#-*- coding:utf-8 -*-
import random
import xml.etree.ElementTree as ET

index = 0
score = 0
nameList = {}
expList = {}
ranQuiz = {}
memer = ET.parse('memer.xml').getroot()
for meme in memer.iter("meme"):  # XML 파싱하여 리스트로 쌓기
    nameList[index] = meme.get("name")  # name attribute만 따로 저장
    expList[index] = meme.findtext("exp") # exp 태그의 text만 따로 저장
    index += 1

print('인싸테스트\n1.게임 시작\n2.문제 리스트 보기\n')
num = int(input("=>"))
if num == 1:
    ranQuiz = random.sample(range(0, len(nameList)), 5)
    for i in range(0, 5): # 문제는 총 5문제
        print('Q: ' + expList[ranQuiz[i]]) # 문제 출제
        answer = input()
        if(answer == nameList[ranQuiz[i]]): # 입력 값과 랜덤으로 출력된 문제의 답이 일치한다면
            score += 1
            print('정답')
        else:
            print('오답')
    print(score) # 게임이 끝나면 스코어를 보여준다.
elif num == 2:
    print("<문제 리스트>")
    for i in range(0, len(nameList)):
        print((i+1) , nameList[i] + " : " + expList[i])




