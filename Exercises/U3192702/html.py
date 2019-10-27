#Write html page in Python

file = open("new.html", "w")
file.write("<html><head></head><body><h>Hello World!</h></body></html>")
file.close()

file = open("new.html", "r")
print (file.read())
