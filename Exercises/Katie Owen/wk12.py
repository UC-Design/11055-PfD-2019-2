import peopleclass as pc
myfile = open("one.txt", "rt")
try:
    myarray = myfile.readlines()
    print (myarray)
    x=dir(pc)
    print(x)

    peoplearray = []

    for names in myarray:
        peoplearray.append(pc.people(names, "Owen"))
        
    for peopleq in peoplearray:
        peopleq.printer()
                           

    
except:
    print("something went wrong")
else:
    print("no errors")
finally:
    print("finished")


myfile.close()


