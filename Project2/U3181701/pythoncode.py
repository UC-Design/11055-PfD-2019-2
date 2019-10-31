# Necessary Imports
import os
import os.path
import webbrowser

# Menu for user to input ISBN number
print (" Welcome to the menu")
print (" Made by U3181701")
print (" Press 1 and Enter to add ISBN text file")
print (" Press 2 and Enter to find books")

input_method = int(input())

# Read ISBN number from input method
print("Enter file name")
file_name = input()

# Read ISBN Text File
open_file = open(file_name)
read_lines = open_file.readlines()

# Create HTML Webpage
html_file = open("ISBN.html", "w+")

# Write HTML Page 
html_file.write ("<html><head><title>Book Covers</title> <link rel=\"stylesheet\" href=\"StyleSheet.css\"/></head><body><p>Programming for Design: Assignment 2</p><div><h1>Book Covers</h1></div><p>Please find book covers below</p><div class=\"background1\"></div><div class=\"bookstyle\"></div>")

# Create StyleSheet
StyleSheet_file = open("StyleSheet.css", "w+")

# Write CSS StyleSheet
StyleSheet_file.write ("body, html {background-color: black; color: white; font-family: Century Schoolbook; letter-spacing: 3px; height: 100%; padding: 0px; margin: 0px;} img { display: block; margin: 0 auto; height: 450px;} .background1 {height: 150px; background-image: url(libraries.jpg); background size: cover; background-attachment: fixed; background-repeat: repeat-x;} .background2 {height: 120px; background-image: url(read.jpg); background size: cover; background-attachment: fixed;} h1 { font-size: 72px;text-align: center; margin: 0px; padding: 35px; font-weight: normal;} p {font-size: 15px; text-align: center;} h3 {text-align: center;}.bookstyle {padding: 12px;}.footer {background: white; color: grey; height: 50px; width: 100%; text-align: center;}")

# Repeat for every ISBN in file
for isbn in read_lines:
    
# Print book cover to webpage via Open Libary API
    html_file.write("<div class=\"bookstyle\"><h3><span>ISBN: </span>" + isbn + "</h3><img src=\"http://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg\" /></div>")       

#Write HTML Tag 
html_file.write ("</body></html>")

# Close HTML file - END LOOP 
html_file.close()

# Open webpage in a web browser
# Using os.path.abspath
webbrowser.open('file://' + os.path.abspath("ISBN.html"))

# Close CSS File - END LOOP 
StyleSheet_file.close()

# Close Text File - END LOOP 
open_file.close()

# Return Back to Menu
print (" To enter different ISBN's create a text file with ISBN numbers in separate lines")
print (" Or add more ISBN number to existing text file in separate lines")
print (" Or Quit Application")
