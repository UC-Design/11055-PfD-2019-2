
#Varaibles of image URL
imageA = "<img src='http://covers.openlibrary.org/b/isbn/"
imageB = "-M.jpg' />"


#Start of program
#Open text file
f = open ("./ISBN.txt", "r")

#Variable for reading each line of the text file
fline = f.readlines()

#Array for the book ISBNs
book_array = []

#Read all lines of the text file
for xlines in fline:
#Check for ISBN existing in text file - remove this part for the code to work
    if xlines is None:
        Print ("Error: No ISBN detected. HTML will be blank")
    else:
        Print ("No errors detected")
#Append each ISBN between imageA and imageB into book array
    book_array.append(imageA + xlines + imageB)


#First message part
messageA = """<html>
<head>Book Information</head>

<body>

<p>"""

#Second message part
messageB = """</p>

</body>
</html>"""

#Create new HTML file
h = open("./TestBook.html", "w")

#Write messageA to the new HTML file
h.write (messageA)

#Write book_array to the new HTML file
for books in book_array:
    h.write(books)
    
#Write messageB to the new HTML file
h.write (messageB)

#Close all files
h.close()
f.close()

#End of program
