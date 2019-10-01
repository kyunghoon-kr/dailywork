#-*- coding:utf-8 -*-
from tkinter import *
from tkinter import messagebox
import tkinter.ttk
import xml.etree.ElementTree as ET

# 선언부



def okClick(): # 텍스트에 입력된 것을 문자열로 바꾸기
    index=0
    memer=ET.fromstring(text_xmlview.get(0.0, END))
    # for meme in memer.iter("meme"):  # XML 파싱하여 리스트로 쌓기
    #     nameList[index] = meme.get("name")  # name attribute만 따로 저장
    #     expList[index] = meme.findtext("exp")  # exp 태그의 text만 따로 저장
    #     index += 1
    selectTag(memer)
    # a_list = list(memer)
    # text_treeview.insert(0.0, a_list)
    # a_string = text_treeview.get(0.0, END)
    # print(a_string)
    # b = a_string.split('}')
    # b.pop()
    # for str in b:
    #     start = str.index("'")
    #     finish = str[start+1:].index("'") # 두 번쨰 ' 찾음
    #     tag1List.append(str[start+1:start + finish + 1]) # 태그명 추출해서 리스트에 하나씩 추가함ㄴ 됨
    #     print(tag1List)

    # text_treeview.insert(0.0, xmlS)

def selectTag(root):
    maxIndex = 0
    for child in root.iter():
        maxIndex += 1
    try:
        printTreeView(root)
        for i in range(maxIndex):
            try:
                # if(i==0):
                    # text_treeview.insert(END, '\t')
                printTreeView(root[i])
            except:
                pass
            for j in range(maxIndex):
                try:
                    printTreeView(root[i][j])
                except:
                    pass
                for k in range(maxIndex):
                    try:
                        printTreeView(root[i][j][k])
                    except:
                        pass
                    for l in range(maxIndex):
                        try:
                            printTreeView(root[i][j][k][l])
                        except:
                            pass
    except:
        print('띠욧')


def printTreeView(a): # 루트 태그 출력하고 그다음부턴 다 출력
    if (a.text):
        c = '<{}>  {}'.format(a.tag, a.text)
    else:
        c = '<{}>'.format(a.tag)
    text_treeview.insert(END, c)
    printAttribute(a)
    text_treeview.insert(END, "\n")

def printAttribute(tag):
    if tag.items():
        for a in tag.items():
            attrib_split=str(a)[str(a).find("'")+1:-2].split(',')
            attrib_format='\t(@{} = {})'.format(attrib_split[0][:-1],attrib_split[1][2:])
            text_treeview.insert(END, attrib_format)







window=Tk()
window.title("Kim Kyung Hoon") # title
window.geometry("1280x768+300+300") # 너비x높이+x좌표+y좌표
window.resizable(True, True) # 윈도우 창 크기조절 허가여부


text_xmlview=Text(window, width=50, height=60)
text_treeview=Text(window, width=90, height=60)
text_treeview.tag_configure('red', foreground="red")

text_xmlview.pack(side="left",anchor="nw")
text_treeview.pack(side="right", anchor="ne")

btn = Button(window, text="Tree View 만들기", command=okClick, width="35", height="6")
btn.pack(anchor="center")
window.mainloop()

t





