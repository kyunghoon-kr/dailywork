import tkinter

window=tkinter.Tk()

window.title("Kim Kyung Hoon") # title
window.geometry("600x400+300+300") # 너비x높이+x좌표+y좌표
window.resizable(True, True) # 윈도우 창 크기조절 허가여부

label=tkinter.Label(window, text="라벨 테스트") # 라벳 위젯 생성
label.pack() # 위젯 배치
window.mainloop()

