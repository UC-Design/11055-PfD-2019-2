f = open("File 1.txt", "r")
nf = open("File 2.txt", "w")

arr = []

for line in f:
    # do something to i
    arr.append(line)
    
for things in arr:
    nf.write(things)
    
f.close()
nf.close()