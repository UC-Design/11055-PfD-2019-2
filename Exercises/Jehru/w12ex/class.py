myfile = open("one.txt", "r")
names = myfile.read()
namesRev = names[:--1]

class myClass:
    def __init__(self, name):
        self.go = namesRev

p1 = myClass(namesRev)
print(p1.go)

two = open("two.txt", "w")

two.write(p1.go)

myfile.close()
two.close()


Hello = "hello"

somehting.write( "MY name is " + hello) 