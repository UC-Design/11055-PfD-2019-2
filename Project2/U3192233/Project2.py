#define variables
import urllib.request
import json
contentNo = 0
authorNo = 0
base_api_link = "https://www.googleapis.com/books/v1/volumes?q=isbn:"
bookCoverURL = "http://covers.openlibrary.org/b/isbn/"

#create css file
cssFile = open("CSS.css","w")
cssFile.write("""
    body {background-image: linear-gradient(to bottom right, white, lightblue);}
    h1{font-family: 'Liu Jian Mao Cao', cursive; font-size: 50px;}
    h2{font-family: 'Liu Jian Mao Cao', cursive; font-size: 30px;}
    p{font-family: 'Roboto', sans-serif;}
    """)
cssFile.close()

#error checking ISBN file
try:
    #access ISBN file
    with open("ISBN.txt") as ISBNfile:
        content = ISBNfile.readlines()
    #creating/overwriting HTML file
    htmlFile = open("ISBNwebpage.html","w")
    #initial html settings
    htmlFile.write("""
        <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        <title>ISBN Lookup</title>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = yes">
        <link rel="stylesheet" href="CSS.css">
        <style>@import url('https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao|Roboto&display=swap');
        </style>
        </head>
        <body>
        """)
    #FOR content loop for array length
    for x in content:
        #error checking the ISBN
        try:
            #creating URL to each ISBN number
            with urllib.request.urlopen(base_api_link + content[contentNo]) as apiurl:
                text = apiurl.read()
            #Decode the webpage to utf-8
            decoded_text = text.decode("utf-8")
            obj = json.loads(decoded_text)
            #Store book details
            volume_info = obj["items"][0]
            authors = obj["items"][0]["volumeInfo"]["authors"]
            #write number on the ISBN list
            htmlFile.write("<h1>Book " + str(contentNo + 1) + "</h1><br>")
            #write the book's cover image
            htmlFile.write("<img src='" + bookCoverURL + content[contentNo] + ".jpg' alt='Book Cover'>" + "<br>")
            #write the book's title
            htmlFile.write("<h2>" + str(volume_info["volumeInfo"]["title"]) + "</h2><br>")
            #write the book's author
            htmlFile.write("<p>Author(s): ")
            for x in authors:
                htmlFile.write(str(authors[authorNo]) + ". ")
                authorNo += 1
            htmlFile.write("<br>")
            #write the book's summary
            htmlFile.write("Summary:<br>" + str(volume_info["searchInfo"]["textSnippet"]) + "</p><br>")
            authorNo = 0
            contentNo += 1
        except:
            #if the ISBN fails
            htmlFile.write("<h1>Book " + str(contentNo + 1) + "</h1><br>")
            htmlFile.write("<p>Sorry the ISBN entered in line " + str(contentNo + 1) + " of the ISBN file does not exist</p><br>")
            contentNo += 1
    #close files
    htmlFile.write("</body>")
    htmlFile.close()
    ISBNfile.close()
except:
    #if the ISBN file is missing
    htmlFile = open("ISBNwebpage.html","w")
    htmlFile.write("""
        <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        <title>ISBN Lookup</title>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = yes">
        <link rel="stylesheet" href="CSS.css">
        </head>
        <body>
        <p>Sorry the ISBN file does not exist.<br>
        Please ensure the ISBN.txt file is in the same folder as this script</p>
        </body>""")
    htmlFile.close()