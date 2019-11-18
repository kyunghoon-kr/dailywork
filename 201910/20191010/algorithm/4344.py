# 백준 알고리즘 4344번 : 평균은 넘겠지

C = int(input())

for i in range(C):
    sum = 0
    stack = 0
    output = list(map(int, input().split()))
    for j in output[1:]:
        sum += j
    for k in output[1:]:
        if k > sum/output[0]:
            stack += 1
    print("%0.3f"%float(stack/output[0]*100)+'%')