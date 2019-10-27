import week12class as wc

myfile = open("one.txt", "r")
mynewfile = open("two.txt", "w")
#print(myfile.readline()) #this opens the file called names in the same folder as the pyhton file, and reads the first line and prints it.
#i want to read all the lines. so i'll need to put it in a loop yes?
#i will use a for loop, as it it can be used on strings, which are arrays.
for lines in myfile:
    print(lines)#why did this work? how does it know that the variable lines means the number of lines in a file? i haven't used the readlines function?
    mynewfile.write(lines)
myfile.close()
mynewfile.close()
#okay that worked. last time it only did the last one but i moved the open file up top.
#if i open the file in the loop it only prints the last name for some reason. 
#how would i create a file that printed the names in the oppsite order? 

    
