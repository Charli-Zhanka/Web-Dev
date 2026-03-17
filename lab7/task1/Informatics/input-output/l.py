n = int(input())

second_inday = n % 86400
hour = second_inday // 3600
remaining_seconds = second_inday % 3600
minutes = remaining_seconds // 60
seconds = remaining_seconds % 60

print(f"{hour}:{minutes:02d}:{seconds:02d}")