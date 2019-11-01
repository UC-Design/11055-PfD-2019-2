#Open the file that contains the ibsn numbers in read only.
file = open("ISBN.txt", "rt")

#Read lines - testing out how to print specific lines, using the variable data for the lines
data = file.readlines()
print(data[0])
print(data[1])

#Open html in appending mode so we can write in the variable data into the html using the existing variable read from txt file
html = open("index.html", "a")

#Variables of html code, and text for html file.
webp = """
<html>
<head><title>IBSN Finder</title></head>
<body>"""

webr = """<p>"""
webt = """</p>"""

p = """Click the link to see the website for IBSN """

webq = """
</body>
</html>"""

#links to other html pages I've created containing the ibsn book details.
link1 = """<a href ="https://www.booktopia.com.au/the-hobbit-j-r-r-tolkien/ebook/9780007322602.html">Booktopia - The Hobbit</a> """

link2 = """<a href ="https://www.booktopia.com.au/the-design-of-everyday-things-don-norman/book/9780465050659.html">Booktopia - The Design of Everyday Things</a> """

#adding the text into the html
html.write(webp + webr + p + data[0] + " - " + link1 + webt)
html.write(webr + p + data[1] + " - " + link2 + webt + webq)

#closed html as we want to view this in web browser
html.close()

#Open web browser with newly written code
import webbrowser
url = 'index.html'
webbrowser.open(url, new=2)