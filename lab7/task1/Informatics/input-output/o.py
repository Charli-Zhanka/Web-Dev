a = int(input())
b = int(input())
n = int(input())

total = (a * 100 + b) * n
rubels = total // 100
kopecks = total % 100
print(rubels, kopecks)