#Python section#
   
myfile=open("./ISBN.txt", "r")               #Create temporary variable called 'myfile'. This variable will read the ISBN.txt only#
contents=open("./WEBPAGE.html", "w")         #Create variable called 'contents'. This variable will obtain all information from ISBN.txt and create a new html page called 'WEBPAGE.html'#


#Html section#

#Create html and body tags#
contents. write ("<html>")
contents. write ("<body style=background-color:lightgreen;>")       #Assigning colour of background for website#

#Styles for header and footer within html page#
contents.write ("<style>header {border-bottom: 10px solid green;border-left: 10px solid green;border-right: 10px solid green; padding: 30px;}</style>")     #Style for header#
contents.write ("<style>footer {border-top: 10px solid green;border-left: 10px solid green;border-right: 10px solid green; padding: 30px;}</style>")        #Style for footer#

#Html section with content displayed#

#Assign title for webpage#
contents. write ("<title>")
contents. write ("ISBN content")      #Name of title for webpage#
contents. write ("</title>")

#Assign header within webpage#
contents. write ("<header style=text-align:center;font-family:verdana;font-size:350%;>Book Covers</header>")

#Assign paragraph describing content within the webpage. Edit the design of the paragraph#
contents. write ("<p style=font-family:verdana;font-size:150%;>Below are the book covers for the ISBN numbers obtained from the ISBN.txt file.</p>")


#Python section#

#Assign an array to produce image covers based on the ISBN numbers within the 'myfile' variable#
arrstr = myfile.readlines()         #Creates an array where each line becomes something#
for arrs in arrstr:                 #For arrs that are within arrstr; do the following#
  print (arrs)                      #print content in arrs within terminal# 
  contents.write('<img src="http://covers.openlibrary.org/b/isbn/{}-L.jpg" width="400" height="600"/><pre></pre>'.format(arrs)) #Retrieves image from arrs contents using OpenLibrary website#

  
#Html section with content displayed#
  
#Assigning footer within webpage#
contents. write ("<footer style=text-align:center;font-family:verdana;font-size:130%;>Done by: Lohan Angammana (u3178318) </footer>")

#Html section#

contents. write ("</body>")
contents. write ("</html>")


#Python section#

myfile.close()
contents.close()


