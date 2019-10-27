#Read one.txt file and print the names
myfile = open("one.txt", "r")
print(myfile.read())

#Create a new file called two.txt and write names in opposite order
f = open("two.txt", "w")
f.write("Mare, peggy, Finn")
f.close()

#Open and read the file after appending to original file
f = open("two.txt", "r")
print(f.read())


