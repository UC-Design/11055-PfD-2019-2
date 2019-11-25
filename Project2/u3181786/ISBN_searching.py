import urllib.request
import json

# Receive the necessary data for generating the web page
def receive_data(ISBN_code):
    # Send a request to openlibrary API and loads the json data
    data = urllib.request.urlopen("https://openlibrary.org/api/books?bibkeys=ISBN:%s&format=json&jscmd=data"%(code)).read()
    data = json.loads(data)
    if data == {}:
        return None

    # Getting book details
    details = data.get("ISBN:%s"%(code))

    # Getting the title of the book
    title = details.get("title")
    if title == None:
        title = 'None'

    # Getting the list of the names of the authors and convert to a string
    authors = details.get("authors")
    author_list = []
    if authors != None:
        for author in authors:
            author_list.append(author.get("name"))
        author_names = str.join(", ",author_list)
    else:
        author_names = "None"

    # Getting the list of the names of the pulishers and convert to a string
    publishers = details.get("publishers")
    publisher_list = []
    if publishers != None:
        for publisher in publishers:
            publisher_list.append(publisher.get("name"))
        publisher_names = str.join(", ", publisher_list)
    else:
        publisher_names = "None"


    # Getting the publish date
    publisher_date = details.get("publish_date")
    if publisher_date == None:
        publisher_date = "Unknown"

    # Getting the cover image URL
    cover = details.get("cover")
    # If cover exists get the medium one, otherwise display the empty image
    if cover!= None:
        image_url = cover.get("medium")
    else:
        image_url = "empty.jpg"
    return (image_url, title, author_names, publisher_names, publisher_date, ISBN_code)

# Generating the li of the html
# Data needs to be consistent with the format from receive_data()
def generate_li(data):
    return '''
    <li>
                    <img src="%s" alt="">
                    <div class="des">
                        <span>Title:</span>%s
                        <br>
                        <span>Author:</span>%s
                        <br>
                        <span>Publisher:</span>%s
                        <br>
                        <span>Published at:</span>%s
                        <br>
                        <span>ISBN:</span>%s
                        <br>
                    </div>
                </li>
    '''%data

# html
def generate_html(css, li):
    return '''
    <html><head>
    <meta charset="UTF-8">
<!--
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
-->
    <link rel="stylesheet" href="%s">
    <title>ISBN SEARCHING</title>
</head>

<body>
<!--the header of the page-->
    <div class="header">
        <div class="shadow"></div>
        <div class="text1">ISBN </div>
        <div class="text2">SEARCHING</div>
    </div>
<!--information of the book-->
    <div class="index">
        <div class="book">
            <ul>
%s
            </ul>
        </div>

    </div>
    <div class="footer">Design by Hebe Liao for Programming for Design (11055), 2019</div>



</body></html>
'''%(css,str.join('',li))



# Open and read ISBN txt file
with open('ISBN.txt' , 'r') as file:
    ISBN = file.readlines()
# Store ISBN in a list
ISBN = list(map(str.strip,ISBN))
li_list = []#List of li in HTML
# Receive the information of each ISBN
for code in ISBN:
    data = receive_data(code) # Receive the information
    # Generate li if the return value is correct
    if data != None:
        li = generate_li(data)
        print("successfully getting information for book with ISBN: %s" % code)
    # If the return value is wrong, an error will be reported.
    else:
        li = None
        print("error in getting information for book with ISBN: %s" % code)
    #If the generated li is correct, add it to the li_list
    if li != None:
        li_list.append(li)
#Generate web page and open it
with open('project2.html','w') as html:
    html.write(generate_html(css="./css/index.css",li=li_list))# css