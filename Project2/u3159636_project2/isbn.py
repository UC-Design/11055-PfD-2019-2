import urllib.request
import json
import webbrowser
import os
import sys
import textwrap

while True:
    try:
        #This is the link to search for the information of authors and summary
        base_api_link = "https://www.googleapis.com/books/v1/volumes?q=isbn:"
        # Read isbn from file
        print("Please enter the file name:")
        input_file = input()
        with open(input_file, "r") as isbn_file:
            infor = isbn_file.readlines()

        # Create index.html file and open for writing
        html_file = open("index.html", "w+")

        # Write html elements for index.html and embedded css styles.
        html_file.write("""
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic+27px&display=swap" rel="stylesheet">
        <style>
            body{
            background-color:#F9F7E3;
            }
            #left{
                width:400px;
                height:400px;
                float:left;
                margin-left:50px;
                font-family: 'Gentium Book Basic', sans-serif;
            }

            #content{
                width: 600px;
                height:400px;
                float:left;
                font-family: 'Gentium Book Basic', sans-serif;
            }

            .footer {
                  background-color: #e9d8f4;
                  color: #58257b;
                  padding: 5px;
                  text-align: center;
            }
        </style>
    </head>
    <body>
    
        <h1 style="text-align:center; font-family: 'Gentium Book Basic', serif; padding: 50px;" >Website Generated from ISBNs</h1>
        """)

        # Repeat for every ISBN in isbn.txt or list input
        for isbn in infor:
            # Call the Open Library Developers API and print book cover to webpage
            html_file.write('<div id="left">')
            html_file.write("<br>")
            html_file.write("</h3><img src=\"http://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg\" /></div>")
            html_file.write('</div>')
            
            html_file.write('<div id = "content">')
            html_file.write("<h3>ISBN number: "+isbn+"</h3>")
            

            # This part is for reading the author(s) and summary.
            with urllib.request.urlopen(base_api_link + isbn) as f:
                text = f.read()
            decoded_text = text.decode("utf-8")
            obj = json.loads(decoded_text) # deserializes decoded_text to a Python object
            volume_info = obj["items"][0] 
            authors = obj["items"][0]["volumeInfo"]["authors"]

            html_file.write("Title: " + volume_info["volumeInfo"]["title"])
            html_file.write("<br>"+"<br>")
            html_file.write("\nAuthor(s): " + ",".join(authors))
            html_file.write("<br>"+"<br>")
            html_file.write("Summary: ")
            html_file.write(textwrap.fill(volume_info["searchInfo"]["textSnippet"]))
            html_file.write("<br>"+"<br>")
            html_file.write("\nLanguage: "+ volume_info["volumeInfo"]["language"])
            html_file.write('</div>')

        # Write closing index.html tags and close the file
        html_file.write("</body></html>")
        html_file.close()

        # Open webpage in a web browser
        file_path = os.path.abspath("index.html")  # get absolute path to index.html
        filename = 'file:' + file_path
        webbrowser.open_new_tab(filename)

    except:
        print("Oops! Something went wrong!")
        
    status_update = input("\nDo you want to add another ISBN file? y or n: ").lower().strip()
    print("\n")

    if status_update == "n":
        print("\nThank you! Have a nice day.")
        break
    
#Sometime the file has errors when generating the html file.
#It is because the Internet connection and the amount of the data to be search on the authors and summary section in API is too large.
#Please try to read the file again or using smaller size file to read

