# ISBN Reader

# Import Python Libraries

import urllib.request
import json
import textwrap

# HTTP & URL variables and an API key

api_link = "https://www.googleapis.com/books/v1/volumes?q=isbn:"
line_number = 0
html_site = open("ISBN Searcher.html", "w")  # Create the HTML files

with open('ISBN.txt') as f:
    ISBN = f.readlines()

# Write prerequisites for the site
html_site.write("""
<!DOCTYPE HTML>
<html lang = "en">
<head>
    <meta charset = "UTF-8" />
    <title> ISBN Reader </title>
    <link rel="stylesheet" href="stylesheet.css">
        </head>
<h1 class=titleh>
    ISBN READER
    </h1>
    <br><br><br>
    """)

for i in ISBN:

    with urllib.request.urlopen(api_link + ISBN[line_number]) as f:
        text = f.read()  # Reading the ISBN

        decoded_text = text.decode("utf-8")  # Decoding the text using utf-8
        obj = json.loads(decoded_text)  # Convert to python object
        volume_info = obj["items"][0]  # Find Volume Info
        authors = obj["items"][0]["volumeInfo"]["authors"]   # Find  Author

    # displays title, summary, author, domain, page count and language
    print("\nTitle:", volume_info["volumeInfo"]["title"])
    print("\nSummary:\n")
    print(textwrap.fill(volume_info["searchInfo"]["textSnippet"], width=65))
    print("\nAuthor(s):", ",".join(authors))
    print("\nPublic Domain:", volume_info["accessInfo"]["publicDomain"])
    print("\nPage count:", volume_info["volumeInfo"]["pageCount"])
    print("\nLanguage:", volume_info["volumeInfo"]["language"])
    print("\n***")

    # CREATE AND WRITE HTML #

    #  Book info write on HTML
    html_site.write("<h1>Title:" + "&nbsp" + str(volume_info["volumeInfo"]["title"]) + "</h1>")
    try:
        html_site.write("<img src='"+volume_info["volumeInfo"]["imageLinks"]["thumbnail"]+"'.jpg"+"<br>")
    except:
        html_site.write("<p>There is no image for this book</p>")
    html_site.write("<h2>"+"Summary:"+"</h2>")
    html_site.write("<p>Author(s): "+','.join(authors)+"</p>")
    html_site.write("<p>Synopsis: "+volume_info["volumeInfo"]["description"]+"</p>")
    html_site.write("<p>Public Domain:"+str(volume_info["accessInfo"]["publicDomain"])+"</p>")
    html_site.write("<p>Page count:"+str(volume_info["volumeInfo"]["pageCount"])+"</p>")
    html_site.write("<p>Language:"+ str(volume_info["volumeInfo"]["language"])+"</p>")
    html_site.write("<p>***</p>")
    line_number += 1
