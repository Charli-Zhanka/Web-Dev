n = int(input())
start_min = 9 * 60
lesson_duration = 45
break_duration = n - 1
short_break = n // 2
long_break = (n - 1) // 2
total = start_min + n * lesson_duration + short_break * 5 + long_break * 15
hour = total // 60
minute = total % 60
print(hour, minute)