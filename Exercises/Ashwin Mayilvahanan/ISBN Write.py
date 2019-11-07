import webbrowser
import os.path

# isbnRead = open("ISBN.txt", "rt")
# print(isbnRead.read())

# isbnWrite = open("ISBN_Output.txt", "w+")

# with open("ISBN.txt") as isbnRead:
#     lines = isbnRead.readlines()
#     with open("ISBN_Output.txt", "w+") as isbnWrite:
#         isbnWrite.writelines("These are the ISBN numbers:\n")
#         isbnWrite.writelines(lines)
# isbnRead.close
# isbnWrite.close

# OutputISBN = open("ISBN_Output.txt")
# print(OutputISBN.read())

with open("ISBN.txt") as isbnRead:
    lines = isbnRead.readlines()
    with open("ISBN_Output.html", "w+") as isbnWrite:
        isbnWrite.writelines("These are the ISBN numbers:<br />\n")
        for x in lines:
            isbnWrite.write(x + "<br />\n")
            isbnWrite.write("<img src=\"http://covers.openlibrary.org/b/isbn/" + x +  "-L.jpg\" /> <br />")
isbnRead.close
isbnWrite.close

webbrowser.open('file://' + os.path.realpath("ISBN_Output.html"))



