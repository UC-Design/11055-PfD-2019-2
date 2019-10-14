import os.path
import sys
import webbrowser

menu_loop = True

while menu_loop == True:
    print("Welcome to Book Identifier. Add ISBN numbers to a text file and we will show you the corresponding books.")
    
    print("1 - Find Books")
    print("2 - Instructions")
    print("3 - Quit\n")

    try:
        menu_choice = int(input())

    except:
        continue

    if menu_choice == 1:
        input_loop = True
        
        while input_loop == True:
            print("\nEnter file name/address:")
            file_name = input()
            print()
            
            if os.path.exists(file_name) == True:
                open_file = open(file_name)
                read_file = open_file.readlines()

                html_file = open("ISBN.html", "w+")

                html_file.write("<html><head><title>Your Books</title><link rel=\"stylesheet\" type=\"text/css\" href=\"Style.css\" /></head><body><h1>Your Books</h1>")

                for line in read_file:
                    html_file.write("<div class=\"background\"></div><div class=\"bookdisplay\"><h3>" + line + "</h3><img src=\"http://covers.openlibrary.org/b/isbn/" + line + "-L.jpg\" /></div>")

                html_file.write("</body></html>")

                webbrowser.open("ISBN.html", new = 2)

                open_file.close()
                html_file.close()

                break

            else:
                continue

    elif menu_choice == 2:
        print("\nTo enter ISBN's as input, you must type up the ISBN's in a text file IN SEPARATE LINES and link to that text file appropriately. Have fun.\n")
    
    elif menu_choice == 3:
        print("\nGoodbye.")
        sys.exit()

    else:
        continue