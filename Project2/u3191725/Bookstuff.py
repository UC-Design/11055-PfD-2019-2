import bookclass as bc
import urllib.request as rq
import json

#Opening my files that I need to write to and read from.
isbnfile = open("ISBN.txt", "rt")
bookshtml = open("books.html", "w")
htmlcode = open("htmlcodestuff.txt", "rt")


try:

    #Getting the directory in order to see all the things I can do and call in my code. Such as the book class which I imported.
    x=dir(bc)
    print (x)

    #This break is simply to make it easier to read the results when I run the code, so that the directory info is split from the rest of my code.
    print ("\n")

    #Creating an array for the HTML formatting at the start of the html, in order to make it easier to write to the file, rather than typing out the whole code again.
    htmlarray = htmlcode.read()
    print (htmlarray)

    #Writing the HTML array with the formatting and begginnign tags to the HTML file to begin the HTML code.
    bookshtml.write(htmlarray)

    #Creating an array for the ISBN text list, making it into something I can use to then call the ISBN out of later.
    myarray = isbnfile.readlines()
    print (myarray)

    #creating a an array to use in order to make my loop work
    bookarray = []


    # Making a loop to define each ISBN as an ISBN in my book class. Thus making it somethng I can call for the code later. The loop repeats everything
    # Inside so that every ISBN gets its title, author, publisher, and date called and written, until we run out of ISBN's in the text file.
    for isbn in myarray:
        bookarray.append(bc.book (isbn, "okay", "ok", "1"))
        # Writing all of my formatting to the HTML file and getting the ISBN's cover using the URL plus whatever ISBN it is up to in the list.
        bookshtml.write('\n' + '<p>' + '\n' + '<div>' + '\n' + '<img src=' + '"http://covers.openlibrary.org/b/isbn/' + isbn + '-L.jpg"' + " " + "style" + " " + "=" + " " + '"margin-right: 15px;"' + " " + "/>" + "<br>" + "<br>" + "\n" + "<b>" + "Title: " + "</b>")
        # Here I am requesting the book information in a json list, in order to be bale to call the info I need.
        gbook = rq.urlopen("https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn.strip() + "&jscmd=data&format=json" )
        # Creating Variables for the two longer strips of code that I need to use constantly to call the info.
        bk = json.loads(gbook.read())
        bid = 'ISBN:' + isbn.strip()
        # Calling the info I need and writing it to the file with formatting.
        bookshtml.write(str(bk[bid]['title']) + "<br>" + "\n" + "<b>" + "Author: " + "</b>")
        # Asking for the first part of the list in 'authors' in order to get the dictionary the holds the publisher, and then requesting the value of 'name' which equals the name of the publisher.
        # I have done the same for the publish date.
        bookshtml.write(str(bk[bid]['authors'][0].get('name')) + "<br>" + "\n" + "<b>" + "Publisher: " + "</b>")
        bookshtml.write(str(bk[bid]['publishers'][0].get("name")) + "<br>" + "\n" + "<b>" + "Publish Date: " + "</b>")
        bookshtml.write(str(bk[bid]['publish_date'])+ " " + "\n" + "</div>" + "\n" + "</p>" + "\n")
    
    #To Print the ISBN numbers in order to see that they appear correctly in a list, and this step also helps to allow me
    #  to know where my code is having errors, because if it works, it must be beneath it, and if it doesnt, it must be above - usually.
    for things in bookarray:
        things.printer()

    #Finishing the HTML code with th neccessary tags.
    bookshtml.write("\n")
    bookshtml.write("\n" + "<html>")

#System to catch errors, I have put everything relating to the code except for opening the files into the 'try' in order to see if anything inside the try has errors,
#  in which case it will tell me something went wrong, or no errors, and will always end with finished.
except:
    print("something went wrong")
else:
    print("no errors")
finally:
    print("finished")

#Closing the files in order to save the changes I have made to them.
isbnfile.close()
bookshtml.close()
htmlcode.close()

