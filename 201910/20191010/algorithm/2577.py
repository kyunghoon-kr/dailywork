# 백준 알고리즘 2577번: 숫자의 개수

num = 1
stack = [0]*10
for i in range(3):
    num *= int(input())
for j in str(num):
    for k in range(10):
        if int(j)==k:
            stack[k] += 1

for l in range(10):
    print(stack[l])