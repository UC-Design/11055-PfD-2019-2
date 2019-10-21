#Import additional libraries required to run the program
import sys
import os
import webbrowser

#Menu function
def menu():
    #Create an infinite loop for the menu
    while True:
        #Menu introduction
        print("Welcome to the menu. Select one of the following options:\n\nSelect 'Info' to know more about the program,\nSelect 'Read' to read a file and create external pages for each ISBN on said file,\nOr, select 'Quit' to close the program.")
        print("\nTo select just write into the command window what option you would like to select.\n(It is NOT case sensitive). . .\n")
        #Reads user input & converts it to lower so that the options are not CaSe SeNsItIvE
        mainMenuChoice = input().lower()
        #User has chosen to know additional info
        if mainMenuChoice == "info":
            print("\nYou have chosen to understand more about the program.\n")
            print("This Python program reads file input and then creates a webpage out of the ISBNs contained within the file. These ISBNs can be written all on one line (seperating with graps, not commas), all on new lines, or a mixture of the two.\n\n")
        #User has chosen to have their file read
        elif mainMenuChoice == "read":
            #Loop for when the user fails to provide the ISBN file and wants to try again
            while True:
                #Prints Read Menu options
                print("\nYou have chosen to read a file for ISBNs.\n")
                print("Please provide the .txt file which you would like to read.\n(It is case sensitive, must include '.txt' and must be in the same directory as this program). . .\n")
                #Will read the user's next input
                readChoice = input()
                #If the file exists then it will perform the read and write function
                if os.path.exists(readChoice):
                    readWrite(readChoice)
                    #This break will put user back to the main menu loop
                    break
                #If file doesn't exist it will run the error menu
                else:
                    errorReason = "You have chosen to read a file that does not exist or is not in the proper directory."
                    customRetryMessage = "read your file again"
                    errorMenu(errorReason, customRetryMessage)
        #User has chosen to quit the program
        elif mainMenuChoice == "quit":
            print("\nYou have chosen to quit the program.\n\n")
            #Exits the program
            sys.exit(0)
        #User has either written their option incorrectly or they have chosen an option that doesn't exist
        else:
            print("\nSorry, you have chosen an option that doesn't exist. Please try again.\n\n")

#This function will read the ISBN file the user has selected and create a website which presents all the ISBNs read
#The variable passed through the function is the file name which the user chose
def readWrite(fileName):
    #Tells user what file they chose
    print("\nYou have chosen to read the file '" + fileName + "'.")
    #Check if there are ISBNs within the file
    #List that holds all split strings of a certain file line
    splitList = []
    #List that holds ALL strings from file
    individualStrings = []
    #List which holds all 13 digit long strings (they aren't check to be ISBNs yet)
    isbnList = []
    #Opening the file
    with open(fileName) as readFile:
        #For each line in the file
        for line in readFile:
            #Remove the \n at the end of the string that the file is reading
            #If the \n is NOT removed then we can't boolean check the string length and if string is made of digits
            line.rstrip('\n')
            #Seperating all strings in line and putting them into splitList
            splitList = line.split()
            #Placing each item in splitList INDIVIDUALLY into individualStrings
            #If append directly from line.split() into individualStrings it will create lists within lists
            for listItem in splitList:
                individualStrings.append(listItem)
        #Iterate through list to check if list items are 13 digit strings
        for i in individualStrings:
            if len(i) == 13 and i.isdigit():
                isbnList.append(i)
    #Check if list is empty and then throw error function
    errorMessageEmpty = "\nYou have chosen to read a file that does not contain any ISBNs.\nYou will be returned to the main menu.\n\n"
    if not isbnList:
        print(errorMessageEmpty)
        menu()
    #Check if the numbers are actually ISBNs
    #This is done through employing the following method https://isbn-information.com/check-digit-for-the-13-digit-isbn.html
    #Initialising the character list
    charList = []
    #Initialising final ISBN list
    isbnListFinal = []
    #For each item in isbnList do the following:
    for item in isbnList:
        #Create a list out of characters the current string in isbnList
        charList = list(item)
        #Initialise counter to keep track of what charItem we are up to in the list
        itemCounter = 1
        #Initialise isbnResult
        isbnResult = 0
        #For each character in charList do the following:
        for charItem in charList:
            #If we are up to the 13th element in charList, stop the loop
            if (itemCounter == 13):
                break
            #If the current element's position in the charList is even, multiply by 3 and add result to isbnResult
            elif ((itemCounter % 2) == 0):
                isbnResult += (int(charItem) * 3)
                #Increase counter by 1
                itemCounter += 1
            #If the current element's position in the charList is odd, multiply by 0 and add result to isbnResult
            else:
                isbnResult += (int(charItem) * 1)
                #Increase counter by 1
                itemCounter += 1
        #If the remainder of isbnResult when dividing by 10 doesn equal to the 13th element in charList then add it to the isbnListFinal
        if (10-(isbnResult % 10) == int(charList[12])):
            isbnListFinal.append(item)
    #Check if list is empty and then tell user there was an error and return to the main function.
    if not isbnListFinal:
        print(errorMessageEmpty)
        menu()
    #Creates variables for both the new folder and the file path
    newFolder = "Webpages Created From " + fileName
    filePath = newFolder + "/Index.html"
    #If file path exists then it will not create a new folder and instead put the website within that existing folder
    if os.path.isdir(newFolder):
        print("The outputed webpages will be placed in the existing folder '" + newFolder + "'.")
    #Otherwise if file path doesn't already exist, it will create a folder to put the files within
    else:
        print("A new folder named '" + newFolder + "' will be created to place the outputed webpages in.\n\n")
        #Creates a directory with the name created from the newFolder variable
        os.mkdir(newFolder)
    with open(filePath, "w+") as writeFile:
        #Writing the HTML file along with its internal styling
        writeFile.writelines("""
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Webpage Created from """ + fileName + """</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Slabo+27px&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #f7f7f7;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            text-align:center;
        }

        .oddDiv {
            background-color: #e0f0ff;
        }

        .evenDiv {
            background-color: #fff8e0;
        }

        hgroup {
            text-align: center;
        }

        div {
            width: 30%;
            height:700px;
            float: left;
            font-family: 'Slabo 27px', serif;
            margin-left:2.5%;
            margin-top:2.5%;
            padding-bottom:1%;
        }

        .parallax {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("https://uploads.concordia.net/2018/01/18145556/iStock-170096603.jpg");
            width:95%;
            height:100px;
        }

        footer {
            width: 100%;
            display: inline-block;
            margin: 2em 0;
            height: 70px;
            background-color: #dedede;
            margin-bottom:0%;
            padding-top: 1.5%;
        }
    </style>
</head>
<body>
    <div style="margin-top:0; margin-bottom:3%" class="parallax"></div>
    <h1>Website Generated from ISBNs</h1>
    <h3>All of this information was created from the """ + fileName + """ file</h3>
    <div style="margin-top:2.5%;" class="parallax"></div>
    """)
        #Counter variable keeps track what number the for loop is currently on for colour the divs differently
        counter = 1
        for item in isbnListFinal:
            #If the counter is odd the div will be light blue
            if ((counter % 2) == 0):
                writeFile.write('<div class="evenDiv">')
            #If the counter is even the div will be light yellow
            else:
                writeFile.write('<div class="oddDiv">')
            writeFile.write("<h3>" + item + "</h3>")
            writeFile.write('   <p><a href="https://openlibrary.org/search?isbn=' + item + '&mode=everything">To learn more about the book, click this link.</a></p> <br />')
            writeFile.write("   <img src=\"http://covers.openlibrary.org/b/isbn/" + item +  "-L.jpg\" />")
            writeFile.write('</div>')
            #Create parallax image after every third ISBN
            if ((counter % 3) == 0):
                writeFile.write(' <div class="parallax"></div>')
            counter += 1
        writeFile.write("""
    <footer>
    <p>
        Programming For Design - ISBN File Reader - Project 2 by u3187839, Matej Mitrev 
    </p>
    </footer>
</body>
</html>""")
    #Close the file reader so that there are no access errors for other proccess accessing the file
    readFile.close
    #Close the file writer because there is no more to be written
    writeFile.close
    #Opens up the webpage that was just written for the user to see
    webbrowser.open('file://' + os.path.realpath(filePath))
    #From here the program will return to the main menu.

#This function will give the user the choice to either retry what they were doing before or do something else
#The variables passed through the function allow for the customation of the error menu
#The 'errorMessage' variable tells the user what caused the error
#The 'retryMessage' variable tells the user what will happen if they retry
#It is designed in a way so that any future additions to the program that would need an error menu, this can be used
def errorMenu(errorMessage, retryMessage):
    #Menu loop to allow the user to retry if their miss-spell their option
    while True:
        #Prints the error menu options
        print("\n" + errorMessage)
        print("\nTo continue select one of the following options:\nSelect 'Retry' to try and " + retryMessage + ",\nSelect 'Main' to return back to the main menu,\nOr, select 'Quit' to close the program.\n")
        #Reads user input & converts it to lower so that the options are not CaSe SeNsItIvE
        errorMenuChoice = input().lower()
        #User chose to go back and retry what caused the error in the first place
        if errorMenuChoice == "retry":
            #Breaks out of the error menu loop back to the previous option menu
            break
        #User chose to go back to the main menu
        elif errorMenuChoice == "main":
            #Formatting
            print("\n\n")
            #Runs the menu function
            menu()
        #User chose to quit
        elif errorMenuChoice == "quit":
            #Exits the program
            sys.exit(0)
        #User incorrectly wrote their selected option and will loop back to the top of the error menu function
        else:
            print("\nSorry, you have chosen an option that doesn't exist. Please try again.\n\n")

#Beginning of program where it introduces itself to the user
#
#It will run the infinite menu loop function
print("Hello and welcome to the ISBN File Reader Program.\n")
#Runs the menu function
menu()