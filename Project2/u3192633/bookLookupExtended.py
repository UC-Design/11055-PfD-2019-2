# Library Imports
import sys
import os
import webbrowser
# Imports ISBNLIB Library (If unable to then installs it)
from pip._internal import main as pipmain
try:
    import isbnlib
except ImportError:
    pipmain(['install', '--user', 'isbnlib'])
    import isbnlib

# Declared Variables
booleanInput = True

# Logic
def readISBN(fileName):
    # Open ISBN Text File
    fileOpen = open(fileName)
    fileRead = fileOpen.readlines()
    # Start of ISBN WebPage Creation
    fileWeb = open("Index.html", "wt")
    fileWeb.write("<html>\n\t<head>\n\t\t<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'\n\t</head>\n\t<body>\n\t\t<header>\n\t\t</header>\n\t\t<main>\n\t\t\t<h1>My Books</h1>")
    fileWeb.write("\n\t\t<div class= container>")
    fileWeb.write("\n\t\t<div class= row>")
    # Function that is repeated for each ISBN Number
    for xline in fileRead:
        # Load isbnLib API
        library = isbnlib.meta(xline)
        # Open HTML DIV Tag
        fileWeb.write("\n\t\t\t<div class= 'col-6' align='center'>")
        # Uses API and prints cover of book into the HTML File
        # Display ISBN Cover
        fileWeb.write("\n\t\t\t\t<img src=\"http://covers.openlibrary.org/b/isbn/" + xline + "-M.jpg\" height='300px'/>")
        # Display ISBN
        fileWeb.write("\n\t\t\t\t<h3>ISBN:" + xline +"</h3>")
        # Display Book Name
        fileWeb.write("\n\t\t\t\t<h2>" + library['Title'] + "</h2>")
        # Display Author Name
        fileWeb.write("\n\t\t\t\t<p>" + ''.join(library['Authors']) + '</p>')
        # Display more Information Button
        fileWeb.write('\n\t\t\t\t<p><a href="https://openlibrary.org/search?isbn=' + xline + '&mode=everything">Click Here to Learn More.</a></p>')
        # Closing DIV Tag
        fileWeb.write("\n\t\t\t</div>")
    fileWeb.write("\n\t\t</div")
    fileWeb.write("\n\t\t</div>")
    # End of HTML Page Closing Tags
    fileWeb.write("\n\t\t</main>\n\t</body>\n</html>")
    # Automaticly open HTML File in Web Browser
    webbrowser.open("Index.html")
    # Close Files once done
    fileOpen.close()
    fileWeb.close()

# User Interaction
while booleanInput == True:
    print("\nEnter ISBN File Name: ")
    isbnFileName = input()
    # Adds .txt to the end of the file name
    isbnFileName = isbnFileName + ".txt"
    # Check to determine if ISBN Text File Exsits
    if os.path.exists(isbnFileName) == True:
        readISBN(isbnFileName)
        break
    else:
        print("Invalid File Name")
        continue
