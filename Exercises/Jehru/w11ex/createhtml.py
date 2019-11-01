newhtml = open("index.html", "w")
newcss = open("style.css", "w")

htmlcontent = """<html>
<head><link rel="stylesheet" href="style.css"></head>

<body>
<p>Hello World!</p>
</body>

</html>"""

csscontent = """ body {
    background-color: blue
}

"""

newhtml.write(htmlcontent)
newcss.write(csscontent)

newhtml.close