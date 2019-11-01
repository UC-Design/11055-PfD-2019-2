f = open("isbn.txt", "r")
nf = open("Book Information.html", "w")

arr = []

for line in f:
    # do something to i
    arr.append(line)
    
for things in arr:
    nf.write(things)
    
f.close()
nf.close()
