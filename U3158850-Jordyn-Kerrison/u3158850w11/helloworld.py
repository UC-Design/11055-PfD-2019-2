# first python program
# to write a ccomment use a hash
"""
    multiline comment
"""
# print function
print("Library")

# write to the file
# fileWrite
# read from the file
fileRead = open("ISBN.txt", "r")
# if statement to read the file
if fileRead.mode == 'r':
    content = fileRead.read()
print(content)
