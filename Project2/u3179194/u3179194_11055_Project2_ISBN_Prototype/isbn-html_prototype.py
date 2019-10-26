import sys
import os
from pathlib import Path
import webbrowser

# Prompt user to choose method of inputing ISBN'
print("1) Press 1 and Enter to input directly your ISBN\'s")
print("2) Press 2 and Enter to provide a text file containing ISBN\'s")

input_method = int(input())

if input_method == 1:
    ###### Read isbn's from user imput #####
    print("1) Enter 10 or 13 digit ISBN's")
    print("2) Seperate ISBN's with a newline by pressing Enter")
    print("3) End list by pressing Enter then CTRL d")
    data = sys.stdin.readlines()

elif input_method == 2:
    # Read isbn's directly from provided file
    print("Enter ISBN file name and press Enter")
    input_file = input()
    with open(input_file, "r") as isbn_file:
        data = isbn_file.readlines()

# Create index.html file and open for writing
html_file = open("index.html", "w+")

# Write html elements (prior to iterating lines in data variable list) for index.html and embedded css styles.
html_file.write(
    "<html><head><title>Your Books</title></head><body><style type=\"text/css\">body{background:#cce0e0;}#container{display:grid;grid-template-columns:repeat(auto-fit, minmax(500px, 1fr));grid-template-rows:auto;grid-gap:50px;justify-items:center;padding:20px;}span{color:#333333;}h3{font-size:1.5em;color:#555555;text-align:center;}h1{color:#1f81fede;font-family:'Lato', sans-serif;font-size:5em;font-weight:700; line-height:70px; margin:60px 0;text-align:center;text-shadow:0 2px white, 0 3px #777; }img{display:block;height:600px;width:500px}</style><h1>Your Books</h1><div id=\"container\">")

# Repeat for every ISBN in isbn.txt or list input by user (data)
for isbn in data:
    # Call the Open Library Developers API and print book cover to webpage
    html_file.write("<div class=\"bookdisplay\"><h3><span>ISBN: </span>" + isbn +
                    "</h3><img src=\"http://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg\" /></div>")

# Write closing index.html tags and close the file
html_file.write("</div></body></html>")
html_file.close()

# Open webpage in a web browser
file_path = os.path.abspath("index.html")  # get absolute path to index.html
filename = 'file:' + file_path
webbrowser.open_new_tab(filename)


# ISBN's sample list
# 9780007322602
# 9780465050659
# 9780136006176
# 0077354761
# 0385472579
# 0898798701
# 978-1-60309-050-6
# 978-1-891830-75-4
