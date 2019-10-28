# Necessary imports
import os.path
import sys
import webbrowser

# Boolean used to loop menu
menu_loop = True

while menu_loop == True:
    # Menu
    print("I am the Book Identifier. Add ISBN's to a text file and I can find and show you the corresponding books.")
    print("1 - Find Books")
    print("2 - Instructions")
    print("3 - Quit\n")

    try:
        menu_choice = int(input())
    
    # Exception for non-integer inputs
    except:
        print()
        continue

    if menu_choice == 1:
        # Boolean used to loop filename input when an invalid input is entered
        input_loop = True
        
        while input_loop == True:
            print("\nEnter file name/address:")
            file_name = input()
            
            # Check if file exists
            if os.path.exists(file_name) == True:
                # Read file
                open_file = open(file_name)
                read_file = open_file.readlines()

                # Create stylesheet
                css_file = open("Style.css", "w+")
                css_file.write("body, html {background-color: #552d1a; color: white; font-family: Courier New; height: 100%; padding: 0px; margin: 0px;} img {display: block; margin: 0 auto; height: 900px;} .background {height: 250px; background-image: url(https://wallpapercave.com/wp/wp2036897.jpg); background-size: cover; background-attachment: fixed;} .background1 {height: 450px; background-image: url(https://wallpapercave.com/wp/wp2036897.jpg); background-size: cover; background-attachment: fixed;} h1 {font-size: 72px; text-align: center; margin: 0px; padding: 35px; font-weight: normal;} h3 {text-align: center;} .bookdisplay {padding: 12px; padding-bottom: 30px;}")

                # Create webpage
                html_file = open("ISBN.html", "w+")
                html_file.write("<html><head><title>Your Books</title><link rel=\"stylesheet\" type=\"text/css\" href=\"Style.css\" /></head><div><h1>Your Books</h1></div><body><div class=\"background1\"></div>")

                # Repeat for every ISBN
                for line in read_file:
                    # Call API and print book cover to webpage
                    html_file.write("<div class=\"bookdisplay\"><h3>" + line + "</h3><img src=\"http://covers.openlibrary.org/b/isbn/" + line + "-L.jpg\" /></div><div class=\"background\"></div>")

                
                html_file.write("</body></html>")

                # Open webpage in a web browser
                webbrowser.open("ISBN.html", new = 2)

                open_file.close()
                css_file.close()
                html_file.close()

                print()

                break

            else:
                continue

    elif menu_choice == 2:
        print("\nTo enter different ISBN's as input, you must type up the ISBN's in a text file IN SEPARATE LINES and link to that text file appropriately. Have fun.\n")
    
    elif menu_choice == 3:
        print("\nGoodbye.")
        sys.exit() # Exit program

    else:
        print()
        continue
