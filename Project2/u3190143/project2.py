p1 = open("project2.html", "w")

html_start = """<html>
<head></head>
<body>"""

html_finish = """</body>
</html>"""

isbn_start = '<img src="http://covers.openlibrary.org/b/isbn/'
isbn_finish = '-S.jpg" />'
html_error = "Error"

# Program

#   Open isbn file for reading
isbn_text = open("isbn.txt", "r")

#  Read all the lines into an array
totallines = isbn_text.readlines()
#   Make x equal to the number of lines
x = len(totallines)
#   If x (number of lines) is equal to 0 (file has no lines)
if x == 2:
#  Print error message 
    p1.write(html_error)

#   Print(totallines)

#write opening html

p1.write(html_start)

#write all the book stuff

for xlines in totallines:
    p1.write(isbn_start + xlines + isbn_finish)
#    print (xlines)



# write the final html

p1.write(html_finish)

isbn_text.close()
p1.close()
