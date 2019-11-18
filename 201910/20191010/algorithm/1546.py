# 백준 알고리즘 1546번: 평균

N = int(input())

score = list(map(int,input().split()))
M = max(score)
sum = 0
for i in score:
    i = i / M * 100
    sum += i

print(float(sum/len(score)))