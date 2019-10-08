import datetime

time = datetime.datetime.now()
name = input("Please enter your name: ")

while name == "":
    name = input("ERROR - Please enter your name: ")

if time.hour < 17:
    print("Hello " + name + ", have a great day")
else:
    print("Hello " + name + ", have a great night")
