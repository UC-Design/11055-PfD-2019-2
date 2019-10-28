#opens file to read isbn
myfile=open("./isbn.txt","rt")
#writes new html file
mynewfile=open("./isbn.html","w")

#creates an array for lines in isbn file
alllines = myfile.readlines()
#prints array
print(alllines)

#open html
mynewfile.write("<html>")
#opens body
mynewfile.write("<body>")
#writes heading
mynewfile.write("<h1> Cover Art for Books </h1>")

for alllines()<50
mynewfile.write ('<img src="http://covers.openlibrary.org/b/isbn/'+alllines[0]+'-L.jpg"/>')

#mynewfile.write ('<img src="http://covers.openlibrary.org/b/isbn/'+alllines[1]+'-L.jpg"/>')
#closes body
mynewfile.write("</body>")
#closes html
mynewfile.write("</html>")

#closes isbn file
myfile.close()
#closes html file
mynewfile.close()

#mynewfile.write ('<img src="http://covers.openlibrary.org/b/isbn/'+alllines[0]+'-L.jpg"/>')
