Python 3.7.4 (v3.7.4:e09359112e, Jul  8 2019, 14:54:52) 
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license()" for more information.
>>> 
#Define and create the variables for Python
#This fhtml is a variable created for the html page.
fhtml = "<html>"
#This ehtml is the second variable created and is closing the html page.
ehtml = "</html>"
#Book is the variable for the API book covers that will be displayed on the html page.
book = '<img src="http://covers.openlibrary.org/b/isbn/'
#Booke is the variable created for the size of the cover art. In this case the book covers will be displayed 'L' which indicates 'Large'
booke = '-L.jpg" />'
#The Var variable represents the ISBN Number, in this case the one used in the ISBN.txt file and is The Hobbit.
var = "9780007322602"

#OPEN the ISBN.txt file. This is the "read" file which is represented by "r". Cannot write in this file, only read.
myfile = open("./ISBN.txt","r")
#OPEN the ISBN.html file. This is the "write" file which is represented by "w". Cannot read in this file only write.
mynewfile = open("ISBN.html", "w")

    #LOOP HTML file
mynewfile.write(fhtml)

    #Create For LOOP in the ISBN.txt file.
for lines in myfile:
    mynewfile.write(book+lines+booke) #Book+lines+booke = The open library covers + the lines in the ISBN.txt file + the size of the cover art.

#Create CSS File
    cssFile = open("style sheet.css", "w")
    cssFile.write("""

    /* Body of html page, including background colour and font family */
body, html {
    background-color: #dba084;
    color: black;
    font-family: V;
    height: 100%;
    padding: 0px;
    margin: 0px;
}

/* how the book covers are displayed */
.covers {
    display: inline;
    margin: 50px;
    height: 900px;
    padding: 10px;
    border-spacing: 10px; 

}

/* Image of the bookshelves, background rolls over image */
.background {
    height: 1000px;
    background-image: url(bookshelves.jpg);
    background-size: cover;
    background-attachment: fixed; 
}

/* Styles for heading 1 which is the "ISBN Book Library"*/
h1 {
    font-size: 100px;
    position: absolute;
    top: 50px;
    left: 520px;
    transform: translate(-40%, -40%);
    font-weight: bold;
    word-spacing: 30px;
    background-color:#ceecff;
    background position: center;

}

/* How the books are displayed */
.bookdisplay {
    padding: 12px;
    padding-bottom: 30px;
    display: table; 
}


/* This is the footer for the html page. 
It contains a small blue footer which matches with the 
background in the title of the page. 

The footer contains details on that this was completed for Programming for Design by 
student U3146011. */

.footer {
   position: relative;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 40px;
   background-color: #ceecff;
   color: black;
   text-align: center;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 30px;
   text-align: center;
   word-spacing: 30px;

}

    """)

cssFile.close()


#Close all files including txt file, css and html. End Program
mynewfile.write(ehtml)
mynewfile.close()
myfile.close()
cssFile.close()

