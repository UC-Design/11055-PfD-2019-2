import bookclass as bc
myfile = open("ISBN.txt", "rt")
myfile2 = open("books.html", "w")

  

try:
    myfile2.write("<!DOCTYPE html>" + "\n" + "<html>" + "\n")
    x=dir(bc)
    print (x)

    print ("\n")
    
    myarray = myfile.readlines()
    print (myarray)

    bookarray = []

    for books in myarray:
        bookarray.append(bc.book (books, "okay", "ok"))
        myfile2.write( '<img src=' + '"http://covers.openlibrary.org/b/isbn/' + books + '-L.jpg"' + " " + "/>")

    for things in bookarray:
        things.printer()

 
    myfile2.write("\n" + "<html>")

except:
    print("something went wrong")
else:
    print("no errors")
finally:
    print("finished")

myfile.close()
myfile2.close()
