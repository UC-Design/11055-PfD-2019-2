myfile = open("isbn.txt", "r")
mynewfile = open("covers.html", "w")
htmlstart = """<html>
<head></head>
<body><img src="http://covers.openlibrary.org/b/isbn/"""
htmlend = """-M.jpg"><p>"""
htmlend2 = """</p></body>
</html>"""
for lines in myfile:
    print(lines)
    htmlfile = htmlstart + lines + htmlend + lines + htmlend2
    mynewfile.write(htmlfile)
myfile.close()
mynewfile.close()

    
#this isn't working, the read and print does, but the image doesn't show up
#that works now, the isbns i had in there first didn't work. they didn't have those?
#technically i'm done already!! 

#now i want to add an input box. because we won't know what the file is called or where it is, so he mentioned something about, creating a popup box, in which he inputs the file, maybe in a browse box or just file name.
#i would like to make it a browser box if i can, navigate to the file if i can, so it knows the location and the file name so it can read the file.


#something about a rewind function to store the things from the file in the program or something
