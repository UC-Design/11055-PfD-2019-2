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
Books = isbnfile.readline()

#Defining html formating function 
html1 = """<html><head><body><img src="http://covers.openlibrary.org/b/isbn/"""
html2 = """-M.jpg"><p>"""
html3 = """</p></body></html>"""
html_full = html1 + Books + html2 + Books + html3
    
#Resetting position back to the start of the file
isbnfile.seek(0)

#IF number_of_lines < 100 THEN: Read all lines in file
if number_of_lines <100:
    print("Less than 100 lines in file, all lines will be read.")
    #DO WHILE line_has_been_read = false: Read line
    #Record line as object in class
    #Request information from open library API using recorded isbn from file
    for Books in isbnfile:
        print(Books)
        htmlall.write(html_full)
        print(html_full)
        
    
    
      
        

        
#IF information_can_be_found = true THEN: Display information in html file allbooks.html
#ELSE: Display error 
#LOOP
#Close files  (all files for short version. Not individual for long)

#ELSE: Read up to 100 lines in file
else:
    print("More than 100 lines in file: only the first 100 lines will be read.")
    


    
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
