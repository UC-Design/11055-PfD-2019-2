#opens file to read isbn
myfile=open("./isbn.txt","rt")
#writes new html file
mynewfile=open("./isbn.html","w")

#creates an array for lines in isbn file
alllines = myfile.readlines()

#open html
mynewfile.write("<html>")
#opens body
mynewfile.write("<body>")
#writes heading
mynewfile.write("<h1> Cover Art for Books </h1>")
#for statement creates a loop
for lines in alllines:
    #writes all lines image tags to isbn.html to create cover art on html page
    mynewfile.write ('<img src="http://covers.openlibrary.org/b/isbn/'+lines+'-L.jpg"/>')
#closes body
mynewfile.write("</body>")
#closes html
mynewfile.write("</html>")

#closes isbn file
myfile.close()
#closes isbn html file
mynewfile.close()


