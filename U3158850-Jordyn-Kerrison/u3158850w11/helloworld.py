#Libraries for webpage

import webbrowser
import os


fileCSS = open("styles.css", "w")
fileCSS.write("""
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




/* start of css file for library */


body {
    background-color: #efe9db;}

header {
    line-height: 5px;
    padding-top: 20px;
    padding-bottom: 30px;}

h1 {
    font-family: Audrey, serif;
    font-size: 80px;
    letter-spacing: 2px;
    text-align: center;
    color: #d1964c;
    padding-top: 50px;}

h1 a {
    text-decoration: none;
    color: #d1964c;}

h2 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: light;
    padding-top: 35px;
    color: #753d4a;
    font-size: 15px;
    }

div {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    font-family: 'Montserrat', sans-serif;
    color: #753d4a;
    font-size: 12px;
    background-color: #fbfbfb;
    margin-left: 200px;
    margin-right: 200px;
    }
p {
    padding-top: 20px;
    }

p a {
    text-decoration: none;
    color: #753d4a;}

p a:hover {
    color: #dbab61;}

.books-para {
    text-align: center;
    color: #4b553a;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    background-color: #fbfbfb;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 50px;
    padding-bottom: 50px;
    padding-top: 50px;
    }

/* hr {
    display: block;
    margin-top: 65px;
    } */

footer {
    text-align: center;
    color: #753d4a;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    padding-bottom: 20px;}

/* css for help file */
nav {
    text-align: center;
    margin-top: 30px;
    }

nav ul li {
    display: inline;
    text-align: center;
    }

nav ul li a {
    text-decoration: none;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: #753d4a;
    padding-left: 10px;
    padding-right: 10px;
    }
nav ul li a:hover {
    color: #dbab61}

/* help page styles*/

.help-page {
    text-align: center;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    color: #4b553a;
    background-color: #fbfbfb;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 30px;
    padding-bottom: 190px;
    padding-top: 190px;
    }

""")


#read from the existing file
fileISBN = open("ISBN.txt", "r")
#write the html file
fileHTML = open("index.html", "w")

fileHTML.write("""
<!doctype html>
<html lang="en">

<head>
    <link rel="stylesheet" href="styles.css">
    <meta charset="utf-8">
<style>@import url('https://fonts.googleapis.com/css?family=Montserrat:400&display=swap');
@font-face {font-family: Audrey; src: url('Audrey-Normal.otf');}
</style>
</head>

<body>

<header>
<h1><a href="index.html">LIBRARY</a></h1>

<nav>
    <ul>
        <li><a href="index.html">BOOKS</a><li>
        <li><a href="help.html">HELP</a></li>
    </ul>
</nav>

</header>

<p class="books-para"> This page records and displays the book covers in
the ISBN.txt file. <br> enjoy!</p>

""")





for line in fileISBN:
    fileHTML.write("<div><img width=\"20%\" src=\"http://covers.openlibrary.org/b/isbn/" + str(line) + ".jpg\" />")
    fileHTML.write("<p><a href=\"http://openlibrary.org/isbn/" + line +"\" target=\"_blank\">MORE INFORMATION " + line + "</a></p></div>")
    fileHTML.write("<br>")


fileHTML.write("""
</body>
<footer>
<p>Jordyn Kerrison | U3158850 <br> University of Canberra</p>
</footer>
</html>""")


#closing the files
fileHTML.close()
fileISBN.close()
fileCSS.close()

#open browser instead of python shell
webbrowser.open("file://" + os.path.realpath("index.html"))
