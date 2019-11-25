#necessary imports
import tkinter
from tkinter import filedialog
import webbrowser
import os
import os.path
import winsound

window = tkinter.Tk() 

window.title("ISBN GUI") # to rename the title of the window
window.geometry("500x300") # to set window size
window.resizable(width=False, height=False) # to disable window resizing
window.configure(background = "Black") # Fills background as Black

file_type = [("Text Files", ".txt")] #Only shows .txt files in the file explorer

#Main function to read ISBNs and write out to HTML File
def text_file_name_input(): #Opens File Explorer to choose the .txt file
    TEXT_FILE_NAME = filedialog.askopenfilename(parent=window, initialdir = os.getcwd(),
                                                title=" Select.txt file containing ISBN",
                                                filetypes = file_type)
    print(TEXT_FILE_NAME) #Prints file directory in CLI
    
    with open(TEXT_FILE_NAME) as isbnRead: #Selected file is prepared for reading
        lines = isbnRead.readlines() #read file line by line
        with open ("ISBN_Output.html", "w+") as isbnWrite: #Write out HTML
            isbnWrite.writelines("<html><head><title>Book Covers</title><link rel=\"stylesheet\" type=\"text/css\" href=\"Stylesheet.css\" /><link href=\"https://fonts.googleapis.com/css?family=Playfair+Display&display=swap\" rel=\"stylesheet\"/></head><body><div class=\"paralaxScroll\"></div><h1>Book Covers</h1><div class=\"paralaxScroll\"></div>")
            for x in lines: #loop for writing in ISBNs into HTML
                isbnWrite.writelines("<div class=\"bgStyle\"><img src=\"http://covers.openlibrary.org/b/isbn/" + x + "-L.jpg\" /><h3>ISBN: " + x + " <a href=\"https://openlibrary.org/search?isbn=" + x + "&mode=everything\">More Information, Click Here!</a></p></h3></div><div class=\"paralaxScroll2\"></div>")    
            isbnWrite.writelines("<footer class=\"footer\"><div class=\"footer-left\"><p>Programming For Design Project 2 | 2019 | Ashwin Mayilvahanan</p></div></footer></body></html>")
            with open ("Stylesheet.css", "w+") as cssWrite: #Write out to CSS stylesheet
                    cssWrite.writelines("body, html {background-color: black;color: white;font-family: 'Playfair Display', sans-serif;letter-spacing: 5px;height: 100%;padding: 0px;margin: 0px;} \n img {display: block;margin: 0 auto;height: 550px;} \n") 
                    cssWrite.writelines(".paralaxScroll {height: 350px;background-image: url(\"https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80\");background-size: cover;background-attachment: fixed;} \n") 
                    cssWrite.writelines(".paralaxScroll2 {height: 200px;background-image: url(\"https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80\");background-size: cover;background-attachment: fixed;} \n h1 {font-size: 72px;text-align: center;margin: 0px;padding: 35px;font-weight: normal;} \n h3 {text-align: center;} \n .bgStyle {padding: 12px}")
                    cssWrite.writelines("a {color: #5e0000;} \n .footer {background-color: black;width: 100%;text-align: right;font: normal 20px;letter-spacing: 5px;font-family: 'Playfair Display', sans-serif;padding-top: 80px;padding-bottom:30px} \n .footer .footer-left p {color: white;font-size: 14px;margin: 0; padding-right:15px;}") 
    isbnRead.close
    isbnWrite.close
    webbrowser.open('file://' + os.path.realpath("ISBN_Output.html")) #Opens html file with default web browser

#Main Heading
tkinter.Label(window, text = "Book Cover Finder", bg = "#5e0000", fg = "white", font = ("Helvetica", 24)).pack(pady=20)

#Buttons
tkinter.Button(text = "Find ISBN File & Create HTML Page", fg = "white", bg = "#855020", command = text_file_name_input, font = ("Helvetica", 12)).pack(pady=10,side=tkinter.TOP)

window.mainloop() 