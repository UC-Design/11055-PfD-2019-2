#necessary imports
import tkinter
import winsound

winsound.PlaySound("painter.wav", winsound.SND_ASYNC)

def stopMusic():
    winsound.PlaySound(None, winsound.SND_PURGE)

def restartMusic():
    winsound.PlaySound("painter.wav", winsound.SND_ASYNC)


window = tkinter.Tk() 

window.title("ISBN GUI") # to rename the title of the window
window.geometry("500x300") # to set window size
window.resizable(width=False, height=False) # to disable window resizing

img = tkinter.PhotoImage(file="lib.gif") #assigns var to bg image location

#Background Image
backgroundLabel = tkinter.Label(image=img).place(x=0, y=0, relwidth=1, relheight=1)

#Main Heading
Heading = tkinter.Label(window, text = "Book Cover Finder", bg = "#5e0000", fg = "white", font = ("Helvetica", 24)).pack(pady=20)

#Buttons
buttonCreate = tkinter.Button(text = "Find ISBN File & Create HTML Page", fg = "white", bg = "#855020", font = ("Helvetica", 12)).pack(pady=10,side=tkinter.TOP)
buttonStop = tkinter.Button(text = "Stop", command=stopMusic, fg="white", bg="red", font=("Helvetica", 12)).pack(side=tkinter.BOTTOM)
buttonRestart = tkinter.Button(text = "Restart", command=restartMusic, fg="white", bg="red", font=("Helvetica", 12)).pack(side=tkinter.BOTTOM) 

window.mainloop() 