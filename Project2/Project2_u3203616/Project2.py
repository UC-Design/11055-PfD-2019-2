#ISBN SECTION
            
#Locating ISBN File and assigning to variable 
isbnFile = "isbn.txt"

#Making the ISBN.txt a read file
isbnRead = open(isbnFile, "r")

#HTML SECTION

#Assigning name to HTML file
htmlFile1 = "project2.html"

#Open html file for writing
htmlFile2 = open(htmlFile1, "w")

#Foundation for HTML page
htmlFile2.writelines("""
                <!DOCTYPE HTML>
<html lang="en">
<head>
    <title> Welcome! """ + htmlFile1 + """</title>
</head>
<body>
        <h1 style="color:blue;">All book covers below have been created by your """ + isbnFile + """ file</h1>
    """)

#Footer for Page
htmlFile2.writelines("""</body>
<footer>
    <div id="footer">
        <p style="color:red;"> Developed by Conor Ferguson: u3203616
    </div>
<footer>
</html>""")


#HTML CODE

#variable for start of HTML file
html_start = """<html>
<head></head>
<body>"""
    
#variable for end of HTML file
html_end = """</body>
        </html>"""

imgstr = '<img src="http://covers.openlibrary.org/b/isbn/'

imgend = '-L.jpg" />'

#open isbn file for reading
isbn_file = open("isbn.txt", "r")

#read all the lines into an array
totallines = isbn_file.readlines()

#write opening html
htmlFile2.write(html_start)

#PYTHON SECTION

#write information from isbn number
for xlines in totallines:
                htmlFile2.write(imgstr + xlines + imgend)
        #print (xlines)
        #print(html_start + html_finish)
                
        #write the final html
htmlFile2.write(html_end)

#close the 'isbn_file' file
isbn_file.close()

#close 'htmlfile'
htmlFile2.close()





