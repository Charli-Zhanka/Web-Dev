n = int(input())
m = int(input())

result = 1 // ((n % m) * (m % n) + 1)
print(result)