def printme( str ):
    "This is string is within a function!"
    print (str)
    return

printme("What is your name?")

name = input()

printme("Hello " + name + ", how are you doing today?")

feels = input()

printme("Fair Enough mate, I too am " + feels)