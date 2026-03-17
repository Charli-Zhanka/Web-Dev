n = int(input())
min = n % 1440
h = min // 60
m = min % 60
print(h, m)