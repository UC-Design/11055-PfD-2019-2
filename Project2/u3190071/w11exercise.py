#name of my code
print("Anneliese Brenner Tulloh u3190071 Project 2")

#open my file where the ISBN's of two books are held
myfile=open("./ISBNfile.txt","rt")
#the file in which book covers will be viewed
mynewfile=open("./BookCovers.html","w")

#read all lines of 'myfile'
fline = myfile.readlines()

#book cover images from library website in Large format
html_start="<html>"
image_start='<img src="http://covers.openlibrary.org/b/isbn/'
image_end='-L.jpg" />'
html_end="</html>"

mynewfile.write(html_start)

#loop which ensures all lines of external file are read
for num in fline:
    mynewfile.write(image_start+num+image_end)
    
mynewfile.write(html_end)

#close myfile
myfile.close()
mynewfile.close()

