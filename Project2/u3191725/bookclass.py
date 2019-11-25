class book:
    name = ""
    author = ""
    year = ""
    isbn = ""
    def __init__(self, isbn, name, author, year):
        self.isbn = isbn
        self.name = name
        self.author = author
        self.year = year

    def printer (self):
        print(self.isbn + " " + self.name + " " + self.author + " " + self.year)

