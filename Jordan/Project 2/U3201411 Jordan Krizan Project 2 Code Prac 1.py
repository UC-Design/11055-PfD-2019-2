f = open("U3201411 Jordan Krizan Project 2 Book Information 1.html", "r")
nf = open("U3201411 Jordan Krizan Project 2 Book Information 2.html", "w")

arr = []

for line in f:
    # do something to i
    arr.append(line)
    
for things in arr:
    nf.write(things)
    
f.close()
nf.close()
