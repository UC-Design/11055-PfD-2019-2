import requests 
import webbrowser
import os.path 

#open text file
myfile = open("ISBN.txt")

#open html document
html = open("INDEX.html", "w+")

#write background, positioning and allignments for html
html.write ("""<!DOCTYPE html> <html> <head>
                <style> 
#myheader {
  background-color: lightgreen;
  padding: 20px;
  text-align: left;
} 
                </style>
                </head>
            <body>
            <style> 
a {
  color: black;
  text-align: center;
} 
                </style>
            """)

#retreive all ISBN numbers and place within URL
for names in myfile: 
    html.write ("""<div id="myheader">""")
    html.write('<img src="http://covers.openlibrary.org/b/isbn/' + names + '-L.jpg"/>')
    html.write ("</div>")

#URL Code    
    html.write("""<div id="myheader">""")
    html.write('<a href=\"https://openlibrary.org/search?isbn=' + names + '&mode=everything\">Click here for more info</a>')
    html.write ("</div>")



#type out document with ISBN book image jpegs
html.write("""</body>
            </html>""")            

#close all loops
html.close()
myfile.close() 
webbrowser.open('file://' + os.path.realpath("INDEX.html"))