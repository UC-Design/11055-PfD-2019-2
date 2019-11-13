
import webbrowser
myVariable = "My book stock library"
fp = open('ISBNlibrary.txt')

htmlstart = "<html>"
htmlend = "</html>"

    
line = fp.readlines()
page = open ("new.html", "w")
page.write(htmlstart)
for x in line:
    print(x)
 
    htmlimgstart = '<img src="http://covers.openlibrary.org/b/isbn/'
    htmlimgend = '-L.jpg" />'
    num = str(x)    

    page.write(htmlstart)
    page.write(htmlimgstart + num + htmlimgend)
    page.write(htmlend)

    page.close()

    htmlstart = "<html>"
    htmlend = "</html>"
    htmlimgstart = '<img src="http://covers.openlibrary.org/b/isbn/'
    htmlimgend = '-L.jpg" />'
    num = str(x)

    htmlcovstart = '<img src="http://covers.openlibrary.org/a/olid/'
    htmlcovend = '-L.jpg" />'
    cover = 'OL229501A'

    htmlauthorstart = '<a search="https://openlibrary.org/authors/cover/itemprop="author">'
    htmlauthorend = '</a>' 
    name = 'John G. Proakis'

    htmlbooktitlestart = '<h1 class="https://openlibrary.org/books/ISBN/"work-title" itemprop="name">'
    htmlbooktitleend = '</h1>'
    book = 'digital communications'

    page = open("new.html","w")

    
    page.write(htmlimgstart + num + htmlimgend)
    page.write(htmlcovstart + cover + htmlcovend)
    page.write(htmlauthorstart + name + htmlauthorend)
    page.write(htmlbooktitlestart + book + htmlbooktitleend)
   
    page.write("<br>")
    page.write("<br>")


page.write(htmlend)
page.close()
webbrowser.open_new_tab("new.html")
print(myVariable)

