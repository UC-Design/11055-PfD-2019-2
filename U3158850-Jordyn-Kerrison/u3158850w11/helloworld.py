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
fileISBN = open("ISBN.txt", "r")
fileHTML = open("index.html", "w")
#fileCSS = open("styles.css", "w")
# if statement to read the file
if fileISBN.mode == 'r':
    content = fileISBN.read()
print(content)


fileHTML.write ("<html>")
fileHTML.write ("<header> Library </header>")
fileHTML.write ("<body>")
# fileHTML.write ("<img src="http://covers.openlibrary.org/b/isbn/9780385533225-S.jpg"/>")

fileHTML.write ("</body>")



fileHTML.write ("</html>")

#fileCSS.write (".header { font-size: 300px; }")
fileHTML.close()
fileISBN.close()

