import tkinter
from tkinter import filedialog
import webbrowser
import os
import os.path
from pygame import mixer

window = tkinter.Tk() 

window.title("ISBN GUI") # to rename the title of the window
window.geometry("400x200") # to set window size
window.resizable(width=False, height=False) # to disable window resizing
window.configure(background='black') # set background as black


mixer.init() # initialise mixer

file_type = [("all files", ".*"), ("text files", ".txt")]

def text_file_name_input():
    TEXT_FILE_NAME = filedialog.askopenfilename(parent=window, initialdir = os.getcwd(),
                                            title=" Select.txt file containing ISBN",
                                            filetypes = file_type)
    print(TEXT_FILE_NAME) 
    
    with open(TEXT_FILE_NAME) as isbnRead:
        lines = isbnRead.readlines()
        with open ("ISBN_Output.html", "w+") as isbnWrite:
            isbnWrite.writelines("<html><head><title>Book Covers</title><link rel=\"stylesheet\" type=\"text/css\" href=\"Stylesheet.css\" /><link href=\"https://fonts.googleapis.com/css?family=Playfair+Display&display=swap\" rel=\"stylesheet\"></head><body><h1>Book Covers</h1>")
            for x in lines:
                isbnWrite.write("<div class=\"background\"></div><div class=\"paralaxStyle\"><h3>" + x + "</h3><img src=\"http://covers.openlibrary.org/b/isbn/" + x + "-L.jpg\" /></div>")    
                isbnWrite.writelines("</body></html>")
                with open ("Stylesheet.css", "w+") as cssWrite:
                    cssWrite.writelines("body, html {background-color: black;color: white;font-family: 'Playfair Display', sans-serif;height: 100%;padding: 0px;margin: 0px;} \n img {display: block;margin: 0 auto;height: 900px;} \n .background {height: 450px;background-image: url(lib.jpg);background-size: cover;background-attachment: fixed;} \n h1 {font-size: 72px;text-align: center;margin: 0px;padding: 35px;font-weight: normal;} \n .paralaxStyle {padding: 12px;padding-bottom: 30px;}")
        

        isbnRead.close
        isbnWrite.close
        webbrowser.open('file://' + os.path.realpath("ISBN_Output.html"))

        # with open(TEXT_FILE_NAME) as isbnRead:
        # lines = isbnRead.readlines()
        # with open ("ISBN_Output.html", "w+") as isbnWrite:
        #     isbnWrite.writelines("These are the ISBN Numbers:<br />\n")
        #     for x in lines:
        #         isbnWrite.write(x + "<br />\n")
        #         isbnWrite.write("<img src=\"http://covers.openlibrary.org/b/isbn/" + x +  "-L.jpg\" /> <br />")
        
        # isbnRead.close
        # isbnWrite.close
        # webbrowser.open('file://' + os.path.realpath("ISBN_Output.html"))

# Just the music functions
def music():
    mixer.music.load("painter.mp3")
    mixer.music.play()

def music_pause():
    mixer.music.pause()

def music_resume():
    mixer.music.unpause()


Heading = tkinter.Label(window, text = "Book Cover Finder", bg = "black", fg = "white", font = ("Helvetica", 24)).pack()

buttonCreate = tkinter.Button(text = "Find .txt File & Create HTML Page", fg = "white", bg = "blue", command = text_file_name_input, font = ("Helvetica", 12)).pack(pady=10,side=tkinter.TOP)
buttonPause = tkinter.Button(text = "Pause Music", fg = "white", bg = "red", command = music_pause, font = ("Helvetica", 12)).pack(pady=5,side=tkinter.BOTTOM)
buttonResume = tkinter.Button(text = "Resume Music", fg = "white", bg = "red", command = music_resume, font = ("Helvetica", 12)).pack(side=tkinter.BOTTOM)

music()

window.mainloop() 