# Imports
import os
import webbrowser

# Declarations
openBook = open("books.txt", "r")
bookNumber = openBook.readline()
htmlFile = open("catalogue.html", "w")
mainMenu = True #Makes the menu 'active'

htmlStart = """<html>
<head>
    <link rel="stylesheet" href="catalogue.css">
</head>
<body>
<div class="scrolly"></div>

<div class="scrolly">
    <div class="p1">
    <h1>Catalogue</h1>
    Based on what has been input to the local text file.
    </div>
</div>

<div class="scrolly"></div>

<hr>

<br><br>
"""

quickDiv = """
<div align= 'center' padding-top='30px'>
"""

footsie = """
<hr> 
<br>
<div align = 'center'>&copy; 2019 - Programming for design - u3186882</div>
<br>
"""

htmlEnd ="""
</body>
</html>"""

# Misc

       
# Main menu : loops until end program is selected / window is manually closed
while mainMenu == True:     
    
    print("[ M E N U ]\nSelect option.")
    print("[1] : Information")
    print("[2] : Catalogue")
    print("[3] : End program \n")
   
    
    try:
        menuOption = int(input())
    
    except: 
        #If user enters something other than a number
        print("\n Invalid character, please try again. \n")
        continue
        
    # Print information to cmd   
    if menuOption == 1:        
        print("\n A simple catalogue program to list off information about books located in the ISBN file into a HTML format. \n")
       
    # Catalogue
    elif menuOption == 2:
        print("\n Writing catalogue.")
        htmlFile.write(htmlStart)
        
        for bookNumber in openBook:
            htmlFile.write(quickDiv + "<img src=\"http://covers.openlibrary.org/b/isbn/" + bookNumber + "-M.jpg\" /><br><br>")
            htmlFile.write("<b>ISBN no. : " + bookNumber + "</b> <br>")
            htmlFile.write("More information can be found <a href=\"https://openlibrary.org/search?isbn=" + bookNumber + "&mode=everything\"> here</a>.")
            htmlFile.write("</div><br><br><br><br>")
            
        
        htmlFile.write(footsie)
        htmlFile.write(htmlEnd)
        print("\n Catalogue ready, take a look. \n")
        openBook.close()
        htmlFile.close()
        
        webbrowser.open("file://" + os.path.realpath("catalogue.html")) 
    
    # End program
    elif menuOption == 3:
        print("\n Ending program...")
        print("\n Program ended, have a great day. \n")
        sys.exit(0)
        
    else:
        print("")
        
