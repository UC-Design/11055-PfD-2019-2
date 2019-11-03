print("library")
key = input()

print(key)

textFile = open("ISBN.txt", "w")

#Html shortcut
htmlFormatExample = """<html>
<head>
    <link rel="stylesheet" href="fileone.css">
</head>
<body>
"""

htmlSecondExample = """</body>
</html>"""

#vapelifecomment
textFile.write(htmlFormatExample)
#put in all teh images here
textFile.write('<img src="http://covers.openlibrary.org/b/isbn/9780465050659-S.jpg" />')

textFile.write(htmlSecondExample)

textFile.close()
#alwyas close text file or it wont work^

textFile = open("ISBN.txt","w")
x = 9780007322602
y = 9780465050659

