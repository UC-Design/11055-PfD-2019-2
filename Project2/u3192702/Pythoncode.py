#PROJECT 2 _ APPEND BOOK INFORMATION TO HTML PAGE USING OPENLIBRARY API IN PYTHON

#import the class 'bookclass'
#import urllib.request and json to retrieve data from openlibrary API 
import bookclass as bc
import urllib.request as rq
import json

#Write a new html file and name it 'bookpage.html' and open the 'ISBN.txt' file
file1 = open("ISBN.txt" , "rt")
file2 = open("bookpage.html" , "w")

#Create HTML tags inside 'bookpage.html' (file2) to hold API data retrieved from openlibrary API
#try:
file2.write("<!DOCTYPE html>" + "\n" + "<html>" + "\n" )
#x = dir(bc)
#print(x)

#Create a variable called 'array' that reads file1 (ISBN.txt)
array = file1.readlines()
#print(array)


#Add bookcovers from openlibrary to file2 (bookpage.html)
#Create an empty variable called 'array1'
#For the isbn in the variable array, append the variable array1 and the class "bc" and book to it.
#Inside curved brackets,add isbn and three other placeholder characters to append the ISBN.txt contents too.
#for file2, write an image tag in curved brackets and append isbn to show book covers.
#The more isbn numbers located inside in the ISBN.txt file, the more book covers will show.
#Create a variable called gbook containing the urllib request imported at the beginning of the program.
#Inside the gbook variable, open a openlibrary url that requests data from the openlibrary API for the bookcover image.
#Run the isbn file through the url by adding + isbn + after isbn/ and before -L.jpg.

array1 = []
for isbn in array:
    array1.append(bc.book (isbn, "1", "2", "3"))
    file2.write('   ' + '<img src=' + '"http://covers.openlibrary.org/b/isbn/' + isbn + '-L.jpg"' + "/>" + '   ')
    gbook = rq.urlopen("https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn.strip() + "&jscmd=details&format=json")

#Create a variable called 'bk' that loads the gbook url using a json request.
#Create another variable named 'bid' containing the string, 'ISBN:'
#Add an isbn.strip that returns a copy of the 'ISBN:' string.
#Write new data to 'file2' that contains 'bk' and 'bid' variable and reads the API data retrieved from the OpenLibrary API.
#Add data (e.g. 'title') on separate lines and to write to 'bookpage.html' 
    bk = json.loads(gbook.read())
    bid = 'ISBN:' + isbn.strip()
    file2.write(str(bk[bid]['title']) + "<br>" + "\n" + "<br>")
    file2.write(str(bk[bid]['authors'][0].get('name')) + "<br>" + "\n" + "<br>")
    file2.write(str(bk[bid]['publishers'][0].get('name')) + "<br>" + "\n" + "<br>")
    file2.write(str(bk[bid]['publish_date']) + "<br>" + "\n" + "<br>")
    file2.write(str(bk[bid]['number_of_pages']) + "<br>" + "\n" + "<br>")

#Close the 'bookpage.html' file
file2.write("\n" + "<html>")

#Check for errors in the program when running the program
#except:
   #print("something went wrong")
#else:
    #print("no errors")
#finally:
     #print("reading the file")

#Close the both file1 and file2.
file1.close()
file2.close()

#Melina Seserko / 3192702 _ Programming for Design
