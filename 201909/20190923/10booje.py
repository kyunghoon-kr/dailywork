# 백준 알고리즘 10797번: 10부제

num=int(input())
sum=0
n=input().split()
for i in n:
    if int(i)==num:
        sum += 1
print(sum)