#-*- coding:utf-8 -*-
from tkinter import *
from tkinter import messagebox
import xml.etree.ElementTree as ET

# 버튼 클릭 이벤트 핸들러
def okClick():
    text_xmlview.insert(0.0, xmlS)

def textClick(): # 텍스트에 입력된 것을 문자열로 바꾸기
    index = 0
    nameList = {}
    expList = {}
    memer = ET.fromstring(text_xmlview.get(0.0, END))
    # for meme in memer.iter("meme"):  # XML 파싱하여 리스트로 쌓기
    #     nameList[index] = meme.get("name")  # name attribute만 따로 저장
    #     expList[index] = meme.findtext("exp")  # exp 태그의 text만 따로 저장
    #     index += 1
    tag1_list = list(memer)
    print(tag1_list)
    xmlS = ET.tostring(memer, encoding='utf8').decode()
    text_treeview.insert(0.0, xmlS)

window = Tk()
window.title("Kim Kyung Hoon") # title
window.geometry("1280x768+300+300") # 너비x높이+x좌표+y좌표
window.resizable(True, True) # 윈도우 창 크기조절 허가여부

text_xmlview=Text(window, width=50, height=60)
text_treeview=Text(window,width=90,height=60)
text_xmlview.pack(side="left",anchor="nw")
text_treeview.pack(side="right", anchor="ne")

btn = Button(window, text="Tree View 만들기", command=okClick, width="35", height="6")
btn2 = Button(window, text="xml 변환하기", command=textClick, width="35", height="6")
btn.pack(anchor="center")
btn2.pack(anchor="center")
window.mainloop()







