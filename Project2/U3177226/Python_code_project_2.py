#Create and open a brand new '.html' file that will be used as a canvas for this assignment 
p1 = open("project2.html", "w")

#Variable used for the start of my HTML file formatting
html_start = """<html>
<head></head>
<body>"""

#Variable used for the end of my HTML file formatting
html_finish = """</body>
</html>"""

#variable used for the beginning of the cover API request
imgstr = '<img src="http://covers.openlibrary.org/b/isbn/'

#variable used for the ending of the cover API request - the 'L' refers to a 'Large" version of the cover
imgend = '-L.jpg" />'

#open isbn file for reading
isbn_text = open("isbn.txt", "r")

#read all the lines and put them into an array that can be used in the below 'for' function
totallines = isbn_text.readlines()

#write to the 'project2.html' file the beginning format for all html files
p1.write(html_start)

#read lines from the previously created array
#write content line-by-line to 'project2.html' with the formatting according to open librarys website API
for xlines in totallines:
    p1.write(imgstr + xlines + imgend)

#write to the 'project2.html' file the ending format for all html files
p1.write(html_finish)

#close the 'isbn_text' file
isbn_text.close()

#close the html file that was used from
p1.close()
