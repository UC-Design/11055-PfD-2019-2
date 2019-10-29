# first python program
# to write a ccomment use a hash
"""
    multiline comment
"""

#read from the existing file
fileISBN = open("ISBN.txt", "r")
#write the html file
fileHTML = open("index.html", "w")
fileCSS = open("styles.css", "w")
# if statement to read the file
if fileISBN.mode == 'r':
    content = fileISBN.read()
print(content)

cssmessage = """/* montserrat font from google fonts */
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1 {
    color: #94bbe2;
    font-size: 300px;
    font-family: 'Montserrat', sans-serif;
}


"""

#writing the css message
fileCSS.write(cssmessage)

#writing a message to write to the file
htmlmessage = """<!doctype html>
<html lang="en">

<head>
    <link href="u3158850w11/styles.css" rel="stylesheet" type="text/css">
    <meta charset="utf-8">
</head>

<body>

<h1> The Library is Open!</h1>

<p>Results:</p>

</body>
</html>"""

#writing the html message
fileHTML.write(htmlmessage)

#closing the files
fileHTML.close()
fileISBN.close()
fileCSS.close()

