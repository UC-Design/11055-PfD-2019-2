#libraries needed to use for running the webpage
import webbrowser 
import os 

#-------------PREPARE FILES-------------------#
#isbn.txt located and assigned to a variable. 
listName = "assets/text-files/isbn.txt"

#ISBN text list is read
isbnList = open(listName, "r")

#Assigns a file name to htmlFile. This will be created if not exists when opened or just open it if it exists. 
htmlFile = "index.html"

#Open the HTML file to be written to. 
htmFile = open(htmlFile,"w+") 

#-----------WRITE BEGINNING OF HTML CODE TO HTML FILE------------#
#(this code is static and not dynamic)

htmFile.writelines("""
        <!DOCTYPE HTML>
<html lang="en">

<head>
    <!--  Logo appearing on browser -->

    <link rel="icon" href="assets/images/book_logo.jpg">
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Book Banaza Library</title>
</head>
        
        <div class="logo"><a href="index.html"><img src="assets/images/book_logo.jpg" alt="logo for website"></a>


    </div>
    <nav>
        <ul>
            <!--  Drop down list -->
            <li><a href="about.html">About</a></li>


        </ul>
    </nav>

    <div>
    </div>

  
            <h1><strong>BOOK BANAZA</strong><br /></h1>

            <hr>

        </a>
    </div>
    
    

</body>""")

#Cycles through the loop looking for isbn numbers in the isbn text file. 
for line in isbnList:
    htmFile.write("<div ><img width=\"10%\" src=\"http://covers.openlibrary.org/b/isbn/" + str(line) + ".jpg\" /></div>")
    htmFile.write("<p><a href=\"http://openlibrary.org/isbn/" + line +"\" target=\"_blank\">More information: " + line + "</a></p>")
    htmFile.write("<br>")

#close off the bottom part of the HTML tags. 
htmFile.writelines("""</body>


<!--  footer -->

    <footer>
        <div id="footer-info">
            <p>This website was produced by David Grant U3179044 with the assistantnce of Python.</p>


        </div>
    </footer>



</html>""")

#-----------WRITE BEGINNING OF HTML CODE TO HTML FILE------------#
#(this code is static)

#close html file so it can be used. 
htmFile.close()

#OPEN THE WEB PAGE AUTOMATICALLY#
webbrowser.open("file://" + os.path.realpath("index.html")) 
