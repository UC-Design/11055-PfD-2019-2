myfile = open("one.txt", "rt")
print (myfile.read (50))
myfile2 = open("two.txt", "w")
myfile2.write ("Shaun")

myfile.close()
myfile2.close()

