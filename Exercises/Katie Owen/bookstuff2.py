import bookclass as bc
myfile = open("ISBN.txt", "rt")
myfile2 = open("books2.html", "w")

  

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
        myfile2.write( '<script src=' + '"https://openlibrary.org/api/books?bibkeys=ISBN:' + '0451526538' + '&callback=mycallback">' + '</script>')

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
