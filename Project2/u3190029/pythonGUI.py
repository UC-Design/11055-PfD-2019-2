#necessary imports
import tkinter
from tkinter import filedialog
import webbrowser
import os
import os.path
from pygame import mixer # to install pygame, write: [pip install pygame] into python CLI 

window = tkinter.Tk() 

window.title("ISBN GUI") # to rename the title of the window
window.geometry("500x300") # to set window size
window.resizable(width=False, height=False) # to disable window resizing

mixer.init() # initialise mixer for music

file_type = [("Text Files", ".txt")] #Only shows .txt files in the file explorer
img = tkinter.PhotoImage(file="lib.gif") #assigns var to bg image location

def text_file_name_input():
    TEXT_FILE_NAME = filedialog.askopenfilename(parent=window, initialdir = os.getcwd(),
                                            title=" Select.txt file containing ISBN",
                                            filetypes = file_type)
    print(TEXT_FILE_NAME) 
    
    with open(TEXT_FILE_NAME) as isbnRead:
        lines = isbnRead.readlines()
        with open ("ISBN_Output.html", "w+") as isbnWrite: #Write out HTML
            isbnWrite.writelines("<html><head><title>Book Covers</title><link rel=\"stylesheet\" type=\"text/css\" href=\"Stylesheet.css\" /><link href=\"https://fonts.googleapis.com/css?family=Playfair+Display&display=swap\" rel=\"stylesheet\"/></head><body><div class=\"paralaxScroll\"></div><h1>Book Covers</h1><div class=\"paralaxScroll\"></div>")
            for x in lines: #loop for writing in ISBNs into HTML
                isbnWrite.write("<div class=\"bgStyle\"><img src=\"http://covers.openlibrary.org/b/isbn/" + x + "-L.jpg\" /><h3>" + x + "</h3></div><div class=\"paralaxScroll2\"></div>")    
            isbnWrite.writelines("<footer class=\"footer\"><div class=\"footer-left\"><p class=\"archivo\">Programming For Design Project 2 | 2019 | Ashwin Mayilvahanan</p></div></footer></body></html>")
            with open ("Stylesheet.css", "w+") as cssWrite: #Write out to CSS stylesheet
                    cssWrite.writelines("body, html {background-color: black;color: white;font-family: 'Playfair Display', sans-serif;letter-spacing: 5px;height: 100%;padding: 0px;margin: 0px;} \n img {display: block;margin: 0 auto;height: 400px;} \n .paralaxScroll {height: 250px;background-image: url(lib.jpg);background-size: cover;background-attachment: fixed;} \n .paralaxScroll2 {height: 200px;background-image: url(lib.jpg);background-size: cover;background-attachment: fixed;} \n h1 {font-size: 72px;text-align: center;margin: 0px;padding: 35px;font-weight: normal;} \n h3 {text-align: center;} \n .bgStyle {padding: 12px}")
                    cssWrite.writelines(".footer {background-color: black;width: 100%;text-align: right;font: normal 20px;letter-spacing: 5px;font-family: 'Playfair Display', sans-serif;padding-top: 80px;padding-bottom:30px} \n .footer .footer-left p {color: white;font-size: 14px;margin: 0;} \n .footer p.footer-links {font-size: 18px;font-weight: bold;color: white;margin: 0 0 10px;padding: 10px;} \n .footer p.footer-links a {display: inline-block;line-height: 2;text-decoration: none;color: inherit;font-weight: 200;padding-top: 10px;} \n .footer .footer-right {float: right;margin-top: 10px;max-width: 180px;}")
                    cssWrite.writelines(".footer .footer-right a {display: inline-block;width: 35px;height: 35px;background-color: white;border-radius: 2px;font-size: 20px;color: #33383b;text-align: center;line-height: 35px;margin-left: 3px;}")
    isbnRead.close
    isbnWrite.close
    webbrowser.open('file://' + os.path.realpath("ISBN_Output.html"))

# Just the music functions
def music():
    mixer.music.load("painter.mp3")
    mixer.music.play()

def music_pause():
    mixer.music.pause()

def music_resume():
    mixer.music.unpause()

backgroundLabel = tkinter.Label(image=img).place(x=0, y=0, relwidth=1, relheight=1)

Heading = tkinter.Label(window, text = "Book Cover Finder", bg = "#5e0000", fg = "white", font = ("Helvetica", 24)).pack(pady=20)

buttonCreate = tkinter.Button(text = "Find ISBN File & Create HTML Page", fg = "white", bg = "#855020", command = text_file_name_input, font = ("Helvetica", 12)).pack(pady=10,side=tkinter.TOP)
buttonPause = tkinter.Button(text = "Pause Music", fg = "white", bg = "#5e0000", command = music_pause, font = ("Helvetica", 12)).pack(pady=5,side=tkinter.BOTTOM)
buttonResume = tkinter.Button(text = "Resume Music", fg = "white", bg = "#5e0000", command = music_resume, font = ("Helvetica", 12)).pack(side=tkinter.BOTTOM)

music()

window.mainloop() 