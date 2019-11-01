# Necessary imports
import os.path
import sys
import webbrowser

# Boolean which will be used for indefinite loops
loop_true = True

# This is where the program basically starts
while loop_true:
    # Open menu
    print("I am the Book Identifier. Add ISBN's to a text file and I can find and show you the corresponding books.")
    print("1 - Find Books")
    print("2 - Instructions")
    print("3 - Quit\n")

    # Get menu option from user input
    try:
        menu_option = int(input())
    
    # Exception for non-integer inputs
    except:
        print()
        continue
    
    # Find books
    if menu_option == 1:
        while loop_true:
            print("\nEnter text file name/address:")
            file_name = input()
            
            # Check if file exists
            if os.path.exists(file_name) == True:
                # Read file
                open_file = open(file_name)
                read_file = open_file.readlines()

                # Create stylesheet
                css_file = open("Style.css", "w+")
                css_file.write("body, html {background-color: #3b1d0f; color: white; font-family: Courier New; height: 100%; padding: 0px 25px; margin: 0px;} img {display: block; margin: 0 auto; height: 900px;} .background {height: 250px; background-image: url(https://wallpapercave.com/wp/wp2036897.jpg); background-size: cover; background-attachment: fixed;} .background1 {height: 450px; background-image: url(https://wallpapercave.com/wp/wp2036897.jpg); background-size: cover; background-attachment: fixed;} h1 {font-size: 72px; text-align: center; margin: 0px; padding: 35px; font-weight: normal;} .bookdisplay {padding-top: 12px; padding-bottom: 12px; text-align: center;} footer {padding-bottom: 1px;}")

                # Create webpage
                html_file = open("ISBN.html", "w+")
                html_file.write("<html><head><title>Your Books</title><link rel=\"stylesheet\" type=\"text/css\" href=\"Style.css\" /></head><div><h1>Your Books</h1></div><body><div class=\"background1\"></div>")

                # Repeat for every ISBN
                for line in read_file:
                    # Call API and print book cover to webpage
                    html_file.write("<div class=\"bookdisplay\"><h3 style=\"text-align: left;\">" + line + "</h3><img src=\"http://covers.openlibrary.org/b/isbn/" + line + "-L.jpg\" /><br /><h3><a href=\"https://openlibrary.org/isbn/" + line + "\">More</a></h3></div><div class=\"background\"></div>")

                html_file.write("<footer><p>&copy Rafi Rahman - 2019</p></footer></body></html>")

                # Open webpage
                webbrowser.open("ISBN.html", new = 2)

                # Close files
                open_file.close()
                css_file.close()
                html_file.close()

                print()

                break
    
    # Instructions
    elif menu_option == 2:
        print("\nTo enter different ISBN's as input, you must type up the ISBN's in a text file IN SEPARATE LINES and link to that text file appropriately. Have fun.\n")
    
    #Quit
    elif menu_option == 3:
        print("\nGoodbye.")
        sys.exit() # End program

    else:
        print()
        