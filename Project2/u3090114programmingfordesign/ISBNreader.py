import tkinter.filedialog #needed for file dialog box.
import json #json will get the google.apis.com/books and put the data into a dictionary.
import requests #requests needs installing on pipenv. Needed to pull the request from JSON

#open the ISBN text file.
textFile = tkinter.filedialog.askopenfilename()

#use tkinter path to set the ISBNfile string.
ISBNfile = open(textFile)

#create the array
ISBNlist = []
 
#iterate the array
for lines in ISBNfile:

    ISBNlist.append(lines.strip()) #use strip() to remove characters. Adds each ISBN to the array.

#create the html page. CSS is seperate file.
htmlTemplate = """
<!DOCTYPE html>
<html>
<title>Library Books</title>
<head>
<link rel="stylesheet" href="styles.css">
</head>
"""

ISBNfooter = """
</div>
</body>
<footer><p>Created by Gary Richardson U3090114</p></footer>
</html>
"""

#this is where the book info is going. iterate the array to put the ISBN info on to the page.
for bookLoop in ISBNlist:
        htmlFile = open(bookLoop + ".html", "w")#creates seperate webpage per book
        htmlFile.write(htmlTemplate)#start the html
        #fill in the body of the html with the book information.
        bookInfo = requests.get("https://www.googleapis.com/books/v1/volumes?q=" + bookLoop) #gets a http request from googleapis.com/books
        jsonData = bookInfo.json()#converts to text.
        htmlFile.write("<header><h1>" + (jsonData["items"][0]["volumeInfo"]["title"]) + "</h1></header>") #puts the book title in the header
        htmlFile.write("<body>")
        htmlFile.write("<div class='grid-container'>")
        htmlFile.write("<p class = middle><img src=\"http://covers.openlibrary.org/b/isbn/" + bookLoop +"-L.jpg\"></p>")#pulls cover art from openlibrary.org
        htmlFile.write("<br>")
        htmlFile.write("<h3 class = left>" + (jsonData["items"][0]["volumeInfo"]["title"]) + " written by " + (jsonData["items"][0]["volumeInfo"]["authors"][0])+ "</h3>")
        #pulls data from correct element in json file
        htmlFile.write("<br>")
        htmlFile.write("<h4 class = right>" + (jsonData["items"][0]["volumeInfo"]["description"]) + "</h4>")
        htmlFile.write(ISBNfooter)#finish the html

htmlFile.close()

exit()
