# ┌——————————————————————————————————————————┐
# │                                          │
# │  Project 2                               │
# │  Programming for Design (11055)          │
# │                                          │
# │  Lachlan Murray                          │
# │  u3190538                                │
# │                                          │
# └——————————————————————————————————————————┘

# Tries to import isbnlib
from pip._internal import main
try:
    import isbnlib
# If isbnlib is not found, it will be installed using pip
except ImportError:
    import pip
    main(['install', '--user', 'isbnlib'])
    import isbnlib
    print("\n")

# Imports the user's web browser for opening the website automatically later
import webbrowser

# Outputs introductory information to the console
print("━━━━━━━ BookLook ━━━━━━━\n")
print('Opening file: "ISBN.txt"\n')

# Tries to open ISBN.txt
try:
    openFile = open("ISBN.txt")
# If ISBN.txt is not found, an error will be displayed to the console and will prompt the user to close the program to prevent further errors
except FileNotFoundError:
    print('ERROR: File name "ISBN.txt" not found\n')
    input("Press ENTER to close program\n")

# Creates a HTML file
websiteFile = open("index.html", "wt")

# Writes the HTML and CSS to the HTML file
websiteFile.write("""<!DOCTYPE html>
<html>
    <head>
        <link rel="icon" href="https://i.imgur.com/6X0b9tW.png"/>
        <title>BookLook | ISBN Search Engine</title>
    </head>
    <style>
        * {
            padding: 0;
            margin: 0;
            border: 0;
        }

        body {
            font-family: sans-serif;
            background: #f3f3f4;
        }

        header {
            height: 220px;
            background: #1f2130;
        }

        svg {
            display: block;
            margin: auto;
            width: 275px;
            height: auto;
            padding-top: 55px;
        }

        input {
            display: block;
            margin: auto;
            width: 500px;
            height: 50px;
            border-radius: 10px;
            box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.1);
            text-indent: 18px;
            font-size: 18px;
            transform: translate(0, -25px);
        }

        input:focus {
            outline: none;
        }

        section {
            margin-bottom: 75px;
        }

        div {
            position: relative;
            display: block;
            margin: auto;
            width: 750px;
            height: 180px;
            padding: 25px;
            margin-top: 35px;
            border-radius: 10px;
            background: #ffffff;
            box-shadow: 0 1.5px 5px rgba(0, 0, 0, 0.05);
        }

        img {
            width: 135px;
            height: 180px;
            margin-right: 20px;
            float: left;
            background: #f3f3f4;
        }

        h1 {
            font-size: 28px;
            font-weight: normal;
            color: #1f2130;
        }

        h2 {
            margin-top: 7.5px;
            font-size: 20px;
            font-weight: normal;
            color: #575964;
        }

        p {
            margin-top: 15px;
            font-size: 16px;
            color: #8f9097;
        }

        a {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 10px 15px;
            margin: 0 25px 25px 0;
            border-radius: 5px;
            font-size: 16px;
            text-decoration: none;
            color: #545661;
            background: #f3f3f4;
        }

        a:hover {
            color: #ffffff;
            background: #1f2130;
        }
    </style>
    <body>
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" width="210" height="70" viewBox="0 0 210 70">
                <g transform="translate(-401 -45)">
                    <path d="M11.466,10.833a2.71,2.71,0,1,1,0-5.417h44.7V0H10.125A8.124,8.124,0,0,0,2,8.125v48.75A8.124,8.124,0,0,0,10.125,65H56.167V10.833h-44.7Z" transform="translate(399 45)" fill="#3cdafb"/>
                    <path d="M35,31.82,25.878,22.7a14.312,14.312,0,1,0-3.509,3.412l9.17,9.17ZM4.2,14.3A10.109,10.109,0,1,1,14.3,24.413,10.121,10.121,0,0,1,4.2,14.3Z" transform="translate(411.614 64.99)" fill="#1f2130"/>
                    <text transform="translate(470 88)" fill="#fff" font-size="30" font-family="ArialMT, Arial"><tspan x="0" y="0">Book</tspan><tspan x="69" y="0" fill="#3cdafb">Look</tspan></text>
                </g>
            </svg>
        </header>
        <input placeholder="Search ISBN"/>
        <section>""")

print('Searching metadata...\n')

# Tries to read each ISBN and writes the book's metadata with HTML formatting
readFile = openFile.readlines()
for isbn in readFile:
    try:
        book = isbnlib.meta(isbn)
        print("  Getting information for " + isbn.strip())
        websiteFile.write('\n\t\t\t<div>')
        websiteFile.write('\n\t\t\t\t<img src="http://covers.openlibrary.org/b/isbn/' + isbn.strip() + '-M.jpg" alt="' + book['Title'] + ' by ' + ', '.join(book['Authors']) + '"/>')
        websiteFile.write('\n\t\t\t\t<h1>' + book['Title'] + '</h1>')
        websiteFile.write('\n\t\t\t\t<h2>' + ', '.join(book['Authors']) + '</h2>')
        websiteFile.write('\n\t\t\t\t<p>ISBN: ' + isbn.strip() + '</p>')
        websiteFile.write('\n\t\t\t\t<a href="http://openlibrary.org/search?isbn=' + isbn.strip() + '" target="_blank">View information</a>')
        websiteFile.write('\n\t\t\t</div>')
    # If an ISBN can't be read, an error will be displayed to the console
    except:
        print("  ERROR: Could not get information for " + isbn.strip())

# Writes the closing tags to the HTML file
websiteFile.write("""\n\t\t</section>\n\t</body>\n</html>""")

# Outputs completion notification to the console
print('\nWebsite complete!\n')

# Requests the user's input to open the HTML file
input("Press ENTER to open website\n")

# Closes the ISBN.txt and index.html files
openFile.close()
websiteFile.close()

# Opens the HTML file
webbrowser.open("index.html")