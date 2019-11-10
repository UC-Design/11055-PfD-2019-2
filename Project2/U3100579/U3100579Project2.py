#START PROGRAM

#Prompt user to input file name
#Assign input as variable 
isbn_file_name = input("Enter file name:")
print("File is: " + isbn_file_name)

#Do error checks
#IF file_can_be_opened = false THEN: Display error & prompt user to input file name
#Open isbn file using file name variable
try:
    isbnfile = open(isbn_file_name, "rt")
except:
    print("Error: File cannot be opened")
    isbn_file_name = input("Enter file name:")
else:
    print("Opening file...")

#Create CSS
#Import created CSS
import U3100579Project2CSS

#Create html page for all books 
htmlall = open("allbooks.html", "w")

#Do error checks
#IF file_can_be_read = false THEN: Display error & prompt user to input file
#Record number of lines in file as number_of_lines
number_of_lines = 0 
try:
#Read all lines of file 
#Count number of lines in file
    for lines in isbnfile:
        number_of_lines += 1
except:
   print("Error: File cannot be read")
   isbn_file_name = input("Enter file name:")

    
#Resetting position back to the start of the file
isbnfile.seek(0)

#IF number_of_lines < 100 THEN: Read all lines in file
if number_of_lines < 100:
    print("Less than 100 lines in file, all lines will be read.")
    #DO WHILE line_has_been_read = false: Read line
    #Record line
    #Request information from open library API using recorded isbn from file
    #I included the book cover and a link to more detailed information on the open libray website
    #I wanted to include more detailed information with JSON, but could not get it working in time to include in the program, which disapointed me. 
    for linex in isbnfile:
        print(linex)
        #Defining html formating
        html1 = """<html><head><link href="./style.css" rel="stylesheet" type="text/css"/></head><body><img src="http://covers.openlibrary.org/b/isbn/"""
        html2 = """-L.jpg">"""
        html3 = """<br><a href="http://openlibrary.org/isbn/"""
        html4 = """">More information</a><p>"""
        html5 = """</p></body></html>"""
        html_full = html1 + linex + html2 + html3 + linex + html4 + linex + html5
        #Do error checks 
        #IF information_can_be_found = true THEN: Display information in html file allbooks.html
        try: 
            htmlall.write(html_full)
         #ELSE: Display error
        except:
            print("Error: Information could not be found")
    #End LOOP
    


#ELSE: Read up to 100 lines in file
else:
    print("More than 100 lines in file: only the first 100 lines will be read.")
    #Resetting position back to the start of the file
    isbnfile.seek(0)
    #Record current line number as line_number
    line_number = 0; 
    #DO WHILE line_number < 100: Read line
    #Record line
    #Request information from open library API using recorded isbn from file
    while line_number < 100:
        liney = isbnfile.readline()
        print(liney)
        #Defining html formating
        html1 = """<html><head><link href="./style.css" rel="stylesheet" type="text/css"/></head><body><img <img src="http://covers.openlibrary.org/b/isbn/"""
        html2 = """-L.jpg">"""
        html3 = """<br><a href="http://openlibrary.org/isbn/"""
        html4 = """">More information</a><p>"""
        html5 = """</p></body></html>"""
        html_fully = html1 + liney + html2 + html3 + liney + html4 + liney + html5
        #Do error checks
        #IF information_can_be_found = true THEN:Display information in html file allbooks.html
        try:
            htmlall.write(html_fully)
        #ELSE: Display error 
        except:
            print("Error:information could not be found")
        #line_number = line_number + 1
        finally:
            line_number += 1
   #End LOOP
            
#Close files 
isbnfile.close()
htmlall.close()

#I couldn't figure out how to include the more complex information using JSON in time to include it in the program, but I did add the search function using python input.
#Get information from isbn input
#Create html page for individual books 
htmlone = open("onebook.html", "w")
#Create input for isbn
isbn_input = input("Search for a book? Enter ISBN:")
print("ISBN is: " + isbn_input)
#Define html formating
html1 = """<html><head><link href="./style.css" rel="stylesheet" type="text/css"/></head><body><img <img src="http://covers.openlibrary.org/b/isbn/"""
html2 = """-L.jpg">"""
html3 = """<br><a href="http://openlibrary.org/isbn/"""
html4 = """">More information</a><p>"""
html5 = """</p></body></html>"""
html_fullz = html1 + isbn_input + html2 + html3 + isbn_input + html4 + isbn_input + html5
#Do error checks
try:
    htmlone.write(html_fullz)
except:
    print("Error: ISBN not valid:")
    isbn_input = input("Search for a book? Enter ISBN:")
else:
    print("Writing file...")


#Close file 
htmlone.close()
#END PROGRAM


