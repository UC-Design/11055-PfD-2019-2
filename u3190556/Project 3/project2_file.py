
#import things
import os
import webbrowser

#
textFile = open("isbn.txt", "r")
isbn = textFile.readline()
bookyWooky = open("project2_book.html", "w")


print("\n Writing up book webpage.")
bookyWooky.write(starter)
        
for isbn in textFile:
    bookyWooky.write("<a href=\"https://openlibrary.org/search?isbn=" + isbn + "&mode=everything\">")
    bookyWooky.write("<img src=\"http://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg\" /></a><br><br>")
    bookyWooky.write("<b>ISBN number - " + isbn + "</b> <br>Click the book cover to learn more.")
    bookyWooky.write("</div><br><br><br><br>")
bookyWooky.write(end)
    
textFile.close()
bookyWooky.close()      
webbrowser.open("file://" + os.path.realpath("project2_book.html")) 
    
