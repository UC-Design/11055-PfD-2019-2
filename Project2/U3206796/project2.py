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
#writes the image tag to isbn.html
do
mynewfile.write ('<img src="http://covers.openlibrary.org/b/isbn/'+alllines[0]+'-L.jpg"/>')
loop alllines[]
#here I want to loop and check if there is another number/s if there is copy their ISBN number
#if there is not I will continue with the rest of the program.
#closes body
mynewfile.write("</body>")
#closes html
mynewfile.write("</html>")

#closes isbn file
myfile.close()
#closes isbn html file
mynewfile.close()


