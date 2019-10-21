#define variables
import urllib.request
import json
n = 0
base_api_link = "https://www.googleapis.com/books/v1/volumes?q=isbn:"
bookCoverURL = "http://covers.openlibrary.org/b/isbn/"
try:
    #access ISBN file
    with open("ISBN.txt") as ISBNfile:
        content = ISBNfile.readlines()
    #create/open file as overwrite
    htmlFile = open("ISBNwebpage.html","w")
    #initial html settings
    htmlFile.write("""
        <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        <title>ISBN Lookup</title>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = yes">
        <link rel="stylesheet" href="005-MathsWebsite.css">
        </head>
        <body>
        """)
    # FOR content array length
    for x in content:
        try:
            with urllib.request.urlopen(base_api_link + content[n]) as apiurl:
                text = apiurl.read()
            # Decode the webpage
            decoded_text = text.decode("utf-8")
            obj = json.loads(decoded_text)
            # Store book details
            volume_info = obj["items"][0]
            authors = obj["items"][0]["volumeInfo"]["authors"]
            #page's book number
            htmlFile.write("<h1>Book " + str(n + 1) + "</h1><br>")
            #page's book cover
            htmlFile.write("<img src='" + bookCoverURL + content[n] + ".jpg' alt='Book Cover'>" + "<br>")
            #page's book title
            htmlFile.write("<h2>" + str(volume_info["volumeInfo"]["title"]) + "</h2><br>")
            #page's author
            htmlFile.write("Author(s): " + str(authors) + "<br>")
            #page's book summary
            htmlFile.write("Summary:<br>" + str(volume_info["searchInfo"]["textSnippet"]) + "<br>")
            n += 1
        except:
            htmlFile.write("Sorry the ISBN entered in line " + str(n + 1) + "of the ISBN file does not exist")
            n += 1

    htmlFile.write("</body>")
    htmlFile.close()
    ISBNfile.close()
except:
    #create/open file as overwrite
    htmlFile = open("ISBNwebpage.html","w")
    #initial html settings
    htmlFile.write("""
        <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        <title>ISBN Lookup</title>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = yes">
        <link rel="stylesheet" href="005-MathsWebsite.css">
        </head>
        <body>
        Sorry the ISBN file does not exist.<br>
        Please ensure the ISBN.txt file is in the same folder as this script
        </body>""")
    htmlFile.close()

#CHECK IF THERE ARE NUMBER
#CHECK IF NUMBERS ARE VALID


# Create CSS file
#
#    #create html
#
#    #append html
#htmlContent = """
#
#"""

# Open HTML file


##"""
##Found py script to retrieve details from ISBN input, useful information that I'll have to convert to mine
##
##import urllib.request
##import json
##import textwrap
##
##while True:
##
##    base_api_link = "https://www.googleapis.com/books/v1/volumes?q=isbn:"
##    user_input = input("Enter ISBN: ").strip()
##
##    with urllib.request.urlopen(base_api_link + user_input) as f:
##        text = f.read()
##
##    decoded_text = text.decode("utf-8")
##    obj = json.loads(decoded_text) # deserializes decoded_text to a Python object
##    volume_info = obj["items"][0] 
##    authors = obj["items"][0]["volumeInfo"]["authors"]
##
##    # displays title, summary, author, domain, page count and language
##    print("\nTitle:", volume_info["volumeInfo"]["title"])
##    print("\nSummary:\n")
##    print(textwrap.fill(volume_info["searchInfo"]["textSnippet"], width=65))
##    print("\nAuthor(s):", ",".join(authors))
##    print("\nPublic Domain:", volume_info["accessInfo"]["publicDomain"])
##    print("\nPage count:", volume_info["volumeInfo"]["pageCount"])
##    print("\nLanguage:", volume_info["volumeInfo"]["language"])
##    print("\n***")
##
##    status_update = input("\nEnter another ISBN? y or n: ").lower().strip()
##
##    if status_update == "n":
##        print("\nThank you! Have a nice day.")
##        break
##"""
