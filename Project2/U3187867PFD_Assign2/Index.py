import webbrowser
import sys
import urllib.request
import json
import textwrap

message = """<html>
<head></head>
<body><p> Book ISBN Programming For Design Assignment - U3187867 </p>"""
message2 = """
</body>
</html>"""



wp = open('Index.html','w')

Link ="https://www.googleapis.com/books/v1/volumes?q=isbn:"
Header='<table border="1" style="width:100%"><tr><th>ISBN</th>><th>Title</th><th>Summary</th><th>Author</th><th>Page Count</th><th>Publishe Date</th><th>Language</th></tr>'


wp.write(message + message2)#Writes the  header of the assignment
wp.write(Header) #Writes the start of the table

try:
  file= open("Index.txt","r")#opens the file
except:
  print("Could Not find File Index.txt")


  
lines = file.readlines()#read all lines in the file
for i in lines:
  Input =i.strip()

  try:
    with urllib.request.urlopen(Link + Input) as ISBN:
          Booktext = ISBN.read()

    LoadedText = json.loads(Booktext)
    Info = LoadedText["items"][0]
    Authors = LoadedText["items"][0]["volumeInfo"]["authors"]
    wp.write("<tr>")#start a table row for this entry 
    wp.write("<td>"  +  "     "  + str(i)  + "</td>")
    wp.write("<td>"  +  "     "  + str(Info["volumeInfo"]["title"])+ "</td>") #get title of book from Volume Info, and add it into a table row 
    wp.write("<td>"  + textwrap.fill(Info["searchInfo"]["textSnippet"]) +"</td>")  #get a short Description book from Volume Info, and add it into a table row 
    wp.write("<td>"  +  "     "  + str("".join(Authors)+"</td>"))  #get the authors details book from Volume Info, and add it into a table row
   # wp.write("<td>"  +  "     "  + str(["items"][0]["volumeInfo"]["publisher"])+"</td>")  #get the  page count book from Volume Info, and add it into a table row 
    wp.write("<td>"  +  "     "  + str(Info["volumeInfo"]["pageCount"])+"</td>")  #get the  page count book from Volume Info, and add it into a table row 
    wp.write("<td>"  +  "     "  + str(Info["volumeInfo"]["publishedDate"])+"</td>") #get the  publish date book from Volume Info, and add it into a table row 
    wp.write("<td>"  +  "     "  + str(Info["volumeInfo"]["language"])+"</td>") #get the default Language that this book was published in, from Volume Info, and add it into a table row 
    wp.write("</tr>")#end the table row
  except:
    print("A invalid ISBN was found!")




wp.write("</table>")#finish the table


wp.close()#close the html page and open it next line
webbrowser.open_new_tab('Index.html')



