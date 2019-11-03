
#   p1 will create and open a html file with write mode were the content will be saved too
p1 = open("project2.html", "w")

#   Define the structure of the html by storing HTML tags in multiline Python strings   ??
#   This starts and ends the head and starts the body
html_start = """<html>
<head></head>
<body>"""
#   This ends the body
html_finish = """</body>
</html>"""

#   Creates isbn start and finsih variables
#   Searches the Openlibrary resource for an image
isbn_start = '<img src="http://covers.openlibrary.org/b/isbn/'
#   Presents image in Large jpg format
isbn_finish = '-L.jpg" />'
#   Creates variable that holds a error message
html_error = "Error"


#   A variable that opens the isbn.txt file for reading
isbn_text = open("isbn.txt", "r")

#   Totallines will read all lines in an array
totallines = isbn_text.readlines()
#   X will be equal to the number of lines read by the totallines veriable
x = len(totallines)
#   If x (number of lines) is equal to 0 (file has no lines) Print error message
if x == 0: 
    p1.write(html_error)

#   Write the starting html in the p1 file
p1.write(html_start)

#   Fro each of the lines in the isbn file
for xlines in totallines:
#   Write the starting html, the (xlines) then the finishing html in the p1 file
    p1.write(isbn_start + xlines + isbn_finish)

#   write the finishing html in the p1 file
p1.write(html_finish)



#    Close the isbn file
isbn_text.close()
#   Close the p1 file so it cannot be read or written in anymore 
p1.close()
