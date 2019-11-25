import requests;

def retrieveBooks(isbns):
  books = [];
  for isbn in isbns:
    books.append(retrieveBookInfo(isbn));
  return books;

def retrieveBookInfo(isbn):
  response = requests.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn);
  responseBody = response.json();
  volumeInfo = responseBody["items"][0]["volumeInfo"];
  print(volumeInfo)
  return {
    "isbn" : isbn,
    "title": volumeInfo["title"],
    "image" : volumeInfo["imageLinks"]["smallThumbnail"]
  }

def readFile(filePath):
  f = open(filePath,"r",encoding="utf8")
  isbns = [];
  line = f.readline().strip();
  while line != "":
    isbns.append(line);
    line = f.readline();
  return isbns;

def writeHtml(books):
  f = open("index.html","w",encoding="utf8")
  f.write("<html>");
  f.write("<body>")
  for book in books:
    f.write("<div>")
    f.write("<img src=" +book["image"] +"></img>")
    f.write("<p>"+ book["isbn"]+ "</p>")
    f.write("<p>"+ book["title"] + "</p>")
    f.write("</div>")
  f.write("</body>")
  f.write("</html>")
  f.close();

isbns = readFile("ISBN.txt");
books = retrieveBooks(isbns)
writeHtml(books);



