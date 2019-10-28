import week12class as wc

myfile = open("one.txt", "r")
mynewfile = open("two.txt", "w")
People = myfile.readlines()
print(People)
mynewfile.write(str(People))


myfile.close()
mynewfile.close()

#okay, so that does work. but it can't write because write has to be a str not a list and a class is a list.
#well turning it into a string worked, but it's messy.
#not sure what happened a bit. so i created a Class calles People, and it recorded  my file as a People and then printed People. But how do i know if that even worked with the class?
#am i going to try and use this in the thing?? 

