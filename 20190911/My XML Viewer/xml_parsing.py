#-*- coding:utf-8 -*-
from tkinter import *
from tkinter import messagebox
import xml.etree.ElementTree as ET


# memer = ET.parse('memer.xml').getroot()
# for meme in memer.iter("meme"):  # XML 파싱하여 리스트로 쌓기
#     nameList[index] = meme.get("name")  # name attribute만 따로 저장
#     expList[index] = meme.findtext("exp") # exp 태그의 text만 따로 저장
#     index += 1


# xmlS = ET.tostring(memer).decode('utf-8')

window = Tk()
window.title("Kim Kyung Hoon") # title
window.geometry("1280x768+300+300") # 너비x높이+x좌표+y좌표
window.resizable(True, True) # 윈도우 창 크기조절 허가여부

# 버튼 클릭 이벤트 핸들러
def okClick():
    text.insert(0.0, xmlS)

    # text.insert(1.1,"<문제 리스트>")
    # for i in range(0, len(nameList)):
    #     text.insert(0.0, nameList[i] + " : " + expList[i] + "\n")

def textClick(): # 텍스트에 입력된 것을 문자열로 바꾸기
    index = 0
    nameList = {}
    expList = {}
    memer = ET.fromstring(text.get(0.0, END))
    for meme in memer.iter("meme"):  # XML 파싱하여 리스트로 쌓기
        nameList[index] = meme.get("name")  # name attribute만 따로 저장
        expList[index] = meme.findtext("exp")  # exp 태그의 text만 따로 저장
        index += 1
    xmlS = ET.tostring(memer).decode('utf-8')
    text.insert(0.0, xmlS)

label=Label(window,text="아",width=10)
label.pack()
text=Text(window)
text.pack()

# 버튼 클릭 이벤트와 핸들러 정의
btn = Button(window, text="Tree View 만들기", command=okClick)
btn2 = Button(window, text="xml 파일로 만들기", command=textClick)
btn.pack()
btn2.pack()
window.mainloop()






