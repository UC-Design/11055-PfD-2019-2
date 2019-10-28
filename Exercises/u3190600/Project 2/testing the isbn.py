#pip install requests 

#import libraries
import requests
import webbrowser
import json

#Write heading for the project
message = """<html>
<head> <h1>Project 2</h1> </head>
<body><p> By Emma, U3190600 </p></body>
</html>"""

#Test Python to read the text file
try:
    myfile = open ("ISBN.txt")
except:
    print ("An error has occurred") #print only if an invaid ISBN has been provided

#write-html-py
f = open ('output.html', 'w')

f.write ('<table border="1" style="width:100%"><tr><th>ISBN</th><th>Title</th><th>Authors</th><th>Description</th><th>Publisher</th><th>Publishered Date</th><th>Page Count</th></tr>')

f.write(message)

#readlines - reads the whole files as the number of book ISBN's can change
lines = myfile.readlines()
for x in lines:
    Input = x.strip()
    
    try:
        r = requests.get('https://www.googleapis.com/books/v1/volumes?q=isbn:'+ Input) 
        j = r.json()
        
        f.write('<tr>')
        f.write ("<td>" + str (x) + "</td>") #get the ISBN from txt file and add to the first column of the table     
        f.write("<td>" + (j['items'][0]['volumeInfo']['title'])+ "</td>") #get the Title and add to the second column of the table
        f.write("<td>" + (j['items'][0]['volumeInfo']['authors'][0])+ "</td>") #get the Authors and add to the third column of the table
        f.write("<td>" + str ((j['items'][0]['volumeInfo']['description']))+ "</td>") #get the Description and add to the forth column of the table
        f.write("<td>" + str((j['items'][0]['volumeInfo']['publisher'])) + "</td>") #get the Publisher and add to the fifth column of the table
        f.write("<td>" + str((j['items'][0]['volumeInfo']['publishedDate']))+ "</td>") #get the Published Date and add to the sixth column of the table
        f.write ("<td>" + str((j['items'][0]['volumeInfo']['pageCount']))+ "</td>") #get the Page Count and add to the seventh column of the table

    except:
        print ("A invalid ISBN entered")

        f.write('</tr>')
    
f.write("</table>")
f.close()

#new tab is created and opened
webbrowser.open_new_tab('output.html')
