p1 = open("project2.html", "w")

html_start = """<html>
<head></head>
<body>"""

html_finish = """</body>
</html>"""

# program

#open isbn file for reading
isbn_text = open("isbn.txt", "r")

#  read all the lines into an array
totallines = isbn_text.readlines()

#print(totallines)

#write opening html

p1.write(html_start)

#write all the book stuff

for xlines in totallines:
    p1.write(xlines)
#    print (xlines)



# write the final html

p1.write(html_finish)

isbn_text.close()
p1.close()
