myfile = open("names.txt", "r")
mynewfile = open("newnames.html", "w")
htmlstart = """<html>
    <head></head>
    <body><p>"""
htmlend = """</p></body>
    </html>"""
for lines in myfile:
    print(lines)
    htmlfile = htmlstart + lines + htmlend
    mynewfile.write(htmlfile)
myfile.close()
mynewfile.close()

    
#thatworked. put in thing. he said i probably don't want do to thw whole thing every time.altzone so i should try and separate it
#like so! 
#now i want to add an input box. because we won't know what the file is called or where it is, so he mentioned something about, creating a popup box, in which he inputs the file, maybe in a browse box or just file name.
#i would like to make it a browser box if i can, navigate to the file if i can, so it knows the location and the file name so it can read the file.
