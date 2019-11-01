f = open("Book 1.txt", "r")
nf = open("Book 2.txt", "w")

arr = []

for line in f:
    # do something to i
    arr.append(line)
    
for things in arr:
    nf.write(things)
    
f.close()
nf.close()