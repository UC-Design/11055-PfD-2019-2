#START PROGRAM

#Create class to store isbn numbers
#Import class
import U3100579Project2class as p2class
#Import anything else you need
#

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
baseurl = "https://openlibrary.org/api/books?bibkeys=ISBN:"
baseurl2 = "&callback=mycallback"
formaturl = "&format=json"
datatypeurl = "&jscmd=data"

Books = isbnfile.readline()
#DO WHILE line_has_been_read = false: Read line
#Record line as object in class
for Books in isbnfile:
    print(Books)
    url = baseurl + Books + baseurl2 + formaturl + datatypeurl
    htmlall.write(url)


       
    

#Request information from open library API using recorded isbn from file
#IF information_can_be_found = true THEN: Display information in html file allbooks.html
#ELSE: Display error 
#LOOP
#Close files  (all files for short version. Not individual for long)


'''  
			
		
		DO WHILE line_number < 100
			Read line 
			Record line as object in class
			Request information from open library API using recorded isbn from file
				IF information_can_be_found = true THEN
					Display information in html file allbooks.html
				ELSE
				Display error 	
			line_number = line_number + 1
		LOOP
		Close files  (all files for short version. Not individual for long)
		END PROGRAM 
	'''
isbnfile.close()
htmlall.close()
