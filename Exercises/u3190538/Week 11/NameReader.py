nameFile = open("one.txt")

for lines in nameFile:
    print(lines)

newFile = open("two.txt", "wt")
nameFile = open("one.txt")

for lines in reversed(list(nameFile)):
    newFile.write(lines)

newFile.close()
nameFile.close()