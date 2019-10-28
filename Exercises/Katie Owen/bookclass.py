class book:
    name = ""
    author = ""
    year = ""
    def __init__(self, name, author, year):
        self.name = name
        self.author = author
        self.year = year

    def printer (self):
        print(self.name + " " + self.author + " " + self.year)
