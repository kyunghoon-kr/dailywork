# 백준 알고리즘 11399번: ATM

N = input()

sum = 0
ssum = 0
lst = list(map(int, input().split()))
list = sorted(lst)
for i in list:
    sum += int(i)
    ssum += sum
print(ssum)