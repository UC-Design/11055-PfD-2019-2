
    #define the variables
fhtml = "<html>"
ehtml = "</html>"
book = '<img src="http://covers.openlibrary.org/b/isbn/'
booke = '-L.jpg" />'
var = "9780007322602"

    #open the ISBN.text file(read file)
myfile = open("./ISBN.txt","r")
    #open the ISBN.html file (write file)
mynewfile = open("ISBN.html", "w")

    #write the loop html file 
mynewfile.write(fhtml)

    #create for loop in ISBN.txt file
for lines in myfile:
    mynewfile.write(book+lines+booke)

# create css file              
cssFile = open("stylesheet.css","w")
cssFile.write("""
  body, html {
  background-color: #00c0f1;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  padding: 0px;
  margin: 0px;
}

img {
  display: inline-block;
  margin: 0 auto;
  height: 900px;
}

.background {
  height: 1000px;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.background1 {
  height: 1000px;
  background-size: cover;
  background-attachment: fixed;
}

h1 {
  font-size: 100px;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-40%, -40%);
  font-weight: bold;
}

.bookdisplay {
  padding: 12px;
  padding-bottom: 30px;
  display: inline;
}

.footer {
 position: relative;
 left: 0;
 bottom: 0;
 width: 100%;
 height: 50px;
 background-color: #005b98;
 color: whitesmoke;
 text-align: justify;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 27px;
 text-align: center;
}
  """)
cssFile.close()

    #close all files
mynewfile.write(ehtml)
mynewfile.close()
myfile.close()
cssFile.close()





