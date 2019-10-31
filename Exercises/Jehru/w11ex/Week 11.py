myfile = open("one.txt")

#print (myfile.read())

names = (myfile.read())
print (names)
myfile.close



yourfile = open("two.txt", "w")

for line in reversed(list(open("one.txt"))):
    print(line.rstrip())
    names2 = (line.rsplit())
    #print(names2)

#with open('two.txt', 'w') as filehandle:
   # for listitem in names2:
   #     filehandle.write('%s\n' % listitem)

yourfile.close