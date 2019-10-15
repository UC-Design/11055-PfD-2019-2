import tkinter

window = tkinter.Tk()
# to rename the title of the window
window.title("GUI")
window.geometry("300x300")
# pack is used to show the object in the window

def say_hello():
    tkinter.Label(window, text = "Hello There").pack() 

top_frame = tkinter.Frame(window).pack()

label = tkinter.Label(window, text = "Press the button?").pack()
button1 = tkinter.Button(top_frame, text = "Click Me", fg = "red", command = say_hello).pack()

window.mainloop()