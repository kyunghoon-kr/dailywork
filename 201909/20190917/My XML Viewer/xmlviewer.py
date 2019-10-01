#-*- coding:utf-8 -*-
from tkinter import *
from tkinter import messagebox
import tkinter.ttk
import xml.etree.ElementTree as ET

def okClick(): # 텍스트에 입력된 것을 문자열로 바꾸기
    text_treeview.delete(0.0, END)
    xml=ET.fromstring(text_xmlview.get(0.0, END))
    makeTreeView(xml)

def makeTreeView(root):
    stack_all=0
    stack_iter=0
    iter_length=[]
    parent_list=[]
    tag_list=[]
    for a in root.iter(): # 최대 인덱스 구하기
        stackMax += 1
        if len(list(a)) != 0:
            parent_list.append(a)
        tag_list.append(a)
        iter_length.append(len(list(a)))  # 하위 노드 개수 구하여 리스트에 저장
    for i in root.iter(): # Tab하여 출력
        if(i in tag_list[stack_all-1]):
            stack_iter+=1
        elif i in parent_list and tag_list[stack_all+iter_length[stack_all]] in i:
            stack_iter-=1
        for tabRepeat in range(stack_iter): # Tab
            text_treeview.insert(END, "  ")
        printTreeView(i)
        stack_all+=1

def printTreeView(a):
    if (a.text):
        c = '<{}>\t{}'.format(a.tag, a.text)
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

text_xmlview.pack(side="left",anchor="nw")
text_treeview.pack(side="right", anchor="ne")

btn = Button(window, text="Tree View 만들기", command=okClick, width="35", height="20")
btn.pack(anchor="center")
window.mainloop()


