import famclass as fc


myfile = open("one.txt" , "r")


try:
    x = dir(fc)
    print(x)

    myarray = myfile.readlines()
    print(myarray)

    p1 = fc.family(myarray[0],"Dog")
    print(p1.fn)
    print(p1.sn)
  
except:
    print("something went wrong")
else:
    print("no errors")
finally:
    print("finished writing to the file")

myfile.close()
