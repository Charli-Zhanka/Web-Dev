n = int(input())

hundred = n // 100
tens = (n // 10) % 10
ones = n % 10

sum = hundred + tens + ones
print(sum)