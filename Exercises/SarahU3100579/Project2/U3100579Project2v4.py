#START PROGRAM

#Create class to store isbn numbers
#Import class
import U3100579Project2class as p2class

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

#Create css file
#

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

#To store file lines in class
#linex = isbnfile.readline()


    
#Resetting position back to the start of the file
isbnfile.seek(0)

#IF number_of_lines < 100 THEN: Read all lines in file
if number_of_lines <100:
    print("Less than 100 lines in file, all lines will be read.")
    #DO WHILE line_has_been_read = false: Read line
    #Record line
    #Request information from open library API using recorded isbn from file
    for linex in isbnfile:
        print(linex)
        #Defining html formating function 
        html1 = """<html><head><body><img <img src="http://covers.openlibrary.org/b/isbn/"""
        html2 = """-M.jpg">"""
        html3 = """<br><a href="http://openlibrary.org/isbn/"""
        html4 = """">More information</a><p>"""
        html5 = """</p></body></html>"""
        html_full = html1 + linex + html2 + html3 + linex + html4 + linex + html5
        #IF information_can_be_found = true THEN: Display information in html file allbooks.html
        try: 
            htmlall.write(html_full)
            #print(html_full)
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
        #IF information_can_be_found = true THEN:Display information in html file allbooks.html
        #Defining html formating function 
        html1y = """<html><head><body><img <img src="http://covers.openlibrary.org/b/isbn/"""
        html2y = """-M.jpg">"""
        html3y = """<br><a href="http://openlibrary.org/isbn/"""
        html4y = """">More information</a><p>"""
        html5y = """</p></body></html>"""
        html_fully = html1y + liney + html2y + html3y + liney + html4y + liney + html5y
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

#END PROGRAM 
