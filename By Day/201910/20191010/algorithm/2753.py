# 백준 알고리즘 2753번: 윤년

year = int(input())
isRight = False
if year%400==0:
    isRight = True
elif year%4==0 and year%100!=0:
    isRight = True

print(int(isRight))