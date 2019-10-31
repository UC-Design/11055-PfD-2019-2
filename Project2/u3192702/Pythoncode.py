#PROJECT 2

<<<<<<< Updated upstream
#import the class book and open the ISBN text file and write a new html file
import bookclass as bc
import urllib.request as rq
import json

file1 = open("ISBN.txt" , "rt")
file2 = open("bookpage.html" , "w")


#Create html file
#try:
file2.write("<!DOCTYPE html>" + "\n" + "<html>" + "\n" )
#x = dir(bc)
#print(x)

#read the ISBN file
array = file1.readlines()
#print(array)


#Add bookcover
array1 = []
for isbn in array:
    array1.append(bc.book (isbn, "1", "2", "3"))
    file2.write('<img src=' + '"http://covers.openlibrary.org/b/isbn/' + isbn + '-L.jpg"' + "/>")
    gbook = rq.urlopen("https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn.strip() + "&jscmd=details&format=json" )

    bk = json.loads(gbook.read())
    bid = 'ISBN:' + isbn.strip()
    file2.write(bk[bid]['details']['title'])


#Close html
file2.write("\n" + "<html>")


#check for errors
#except:
   #print("something went wrong")
#else:
    #print("no errors")
#finally:
     #print("reading the file")


file1.close()
file2.close()

#Melina Seserko / 3192702 / Programming for Design
=======
import bookclass as bc









>>>>>>> Stashed changes







































#Melina Seserko / 3192702 _ Programming for Design
