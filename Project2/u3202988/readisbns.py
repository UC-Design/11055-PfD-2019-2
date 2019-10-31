# May need to install the requests module ('pip install requests')
#
# Import modules needed for this code to work
import requests
import json
import time

# See if there is an file called 'isbn.txt'
try:
    # Open isbn text and read the ISBN's
    open_isbn_file = open("isbn.txt")
except:
    # Tell the user to have a file called isbn.txt in the same directory
    print("Please have an file called 'isbn.txt' in the same directory as this python file")
    time.sleep(10)

# Create a list of all ISBNS in the file and print out that list
with open("isbn.txt") as f:
    list_all_books_w_isbn = f.read().splitlines()
print ("List of all ISBN's:")
print(list_all_books_w_isbn)

# If no ISBN is found inside the text file then let the user know that they have to place ISBN numbers inside the file
if not list_all_books_w_isbn:
    print("Please Input an ISBN numbers inside the 'isbn.txt' file")
    time.sleep(10)

# Create a new HTML document that is going to output the book covers and information
open_html_file = open("index.html", "w")


# Make a variable (html_content_begin) holding the html content that will begin the page
html_content_begin = """
    <html>
    <head>
    <style>
    body {
        background-color: rgb(44, 61, 81);
    }
    #container {
    width: 90%;
    padding-top: 40px;
    padding-bottom: 50px;
    background-color: rgb(226, 116, 105);
    height: 500px;
    border-radius: 15px;
    margin-top:50px;
    margin-bottom:50px;
    margin-left:auto;
    margin-right:auto;
    }
    img {
        padding: 20px;
        float: left;
        max-width:100%;
        max-height:100%;
    }
    p {
        font-family: 'Roboto', sans-serif;
        color: rgb(255, 255, 255);
    }
    #header {
        width: 100%;
        height: 100px;
        text-align: center;
    }
    h1 {
        font-family: 'Roboto', sans-serif;
        color: rgb(255, 255, 255);
        font-size: 50px;
    }
    </style></head>

    <body>
    <div id="header">
    <h1>Find book information from an ISBN </h1>
    </div>
"""
# Finish the above html content, creating a variable called (html_content_end)
html_content_end = """</body> </html>"""


# Write the html content that will begin the page (this includes the css) to the page
open_html_file.write(html_content_begin)


# Loop through all Isbns, reading the data and update that information to the webpage
print ("Getting all data, this may take a minute or two")
for list_books in open_isbn_file:
    
    params = [
        ['bibkeys', list_books],
        ['jscmd', 'data'],
        ['format', 'json'],
    ]
    # Request the information from Openlibrary
    response = requests.get('https://openlibrary.org/api/books', params=params)

    # Make a json list of all the book data 
    book_data = response.json()

    # Clean up the json list and print it in a easy to read format
    print(json.dumps(book_data, indent=4))

    # Can openlibrary find the ISBN, if not skip the all the code below
    if list_books in book_data:
        print("Yay, ISBN found")
    else:
        print("ISBN not found")
        continue
        

    # Create variables for all the data that will appear on the webpage, reading it from the json list
    isbn_data = book_data[list_books]
    book_title = isbn_data["title"]
    book_url = isbn_data["url"]
    book_publish_date = isbn_data["publish_date"]
    
    # Is the author variable in the ISBN's json list, if yes then find the name of the author
    # otherwise tell the user that no author was found
    if "authors" in isbn_data:  
        book_author = isbn_data["authors"]
        book_author_get_name = book_author[0]
        book_author_name = book_author_get_name["name"]
    else:
        print("no author found")
        
    # Create a div to hold each book on the webpage
    open_html_file.write("""<div id="container">""")
    
    # Find book cover image
    open_html_file.write("""<img src="http://covers.openlibrary.org/b/isbn/"""+ list_books + """-L.jpg"/>""")

    # Write the ISBN number to the webpage
    open_html_file.write("""<p><b> ISBN: </b></p>""")
    open_html_file.write("""<p>""" + list_books + """</p>""")

    # Check if the title is in the json list, if yes then write that title to the webpage and print that 
    # the book has been loaded. If there is no title then print no title found
    if "title" in isbn_data:
        open_html_file.write("""<p><b>Title: </b></p>""")
        open_html_file.write("""<p>""" + book_title + """</p>""")
        print("Loaded:")
        print(book_title)
    else:
        print("No Title found")
    
    # Write the books url (links to the openlibraries website for that book), the books publish data and the books
    # authors name to the webpage
    open_html_file.write("""<p><b>URL: </b></p>""")
    open_html_file.write(""" <button onclick="window.location.href = '""" + book_url + """';">Book Url</button> """)
    open_html_file.write("""<p><b> Publish date: </b></p>""")
    open_html_file.write("""<p>""" + book_publish_date + """</p>""")
    open_html_file.write("""<p><b> Author: </b></p>""")
    open_html_file.write("""<p>""" + book_author_name + """</p>""")
    
    # Check if there is a number of pages in that books json list, if there is than write the number of pages to the
    # website. If there isn't any number of pages than print that there is no number of pages found
    if "number_of_pages" in isbn_data:
        book_pages = isbn_data["number_of_pages"]
        open_html_file.write("""<p><b>Number of pages: </b></p>""")
        open_html_file.write("""<p>""" + str(book_pages) + """</p>""")
    else:
        print("no number of pages found")


    # Finish of the div created above
    open_html_file.write("""</div>""")

# Finish the html tags and print that the html content has been created
open_html_file.write(html_content_end)
print("html content created")

# Close all the files opened 
open_isbn_file.close
open_html_file.close

# Print that the user can now open the html page with their ISBNs data found
print ("End of program, please open the html file generated")
