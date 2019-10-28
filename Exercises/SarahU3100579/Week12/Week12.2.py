import week12

myfile = open("one.txt", "r")
mynewfile = open ("two.txt", "w")
for lines in myfile:
    print(lines)
    mynewfile.write(lines)
myfile.close()
mynewfile.close()
