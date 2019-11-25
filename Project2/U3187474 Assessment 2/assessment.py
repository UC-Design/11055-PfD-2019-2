#Load imports
import os.path
import sys
import webbrowser

#open text file
myfile = open("ISBN.txt")

#open HTML file
html_file = open("assessment.html", "w+")

#Styling
css_file = open("assessment.css" , "w+")
css_file.write("""

body{
    background-color:black !important;
}
h1{
    color:white !important;
    font-family: "Helvetica Neue";
    text-align: center;
    font-size: 45px;
    letter-spacing:5px;
    height:100%;
    padding:0px;
    text-decoration:underline;
}
img{
    max-width:100%;
    height: auto;
    display:block;
    margin-left:auto;
    margin-right:auto;
    width:35%;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: contain;
    border: 5px solid white;
}

    """)
css_file.close()


#HTML file
for names in myfile:
    html_file.write("""
    <!doctype html>
    <html>
    <head>
    <link rel="stylesheet" href="assessment.css">
    <meta charset="utf-8">
    <title>Book ISBN Lookup</title>
    </head>
    <body>
    <h1> Book ISBN Lookup</h1>
    </body>
        """)
    html_file.write('<img src="http://covers.openlibrary.org/b/isbn/' + names + '-L.jpg"/>')
    
    
#close html file
html_file.close()

#close myfile
myfile.close() 

