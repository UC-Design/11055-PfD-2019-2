# html_output = ''
# heading_content = 'Hello World!'

# html_output += f'<html>'
# html_output += f'\n\t<head>\n'
# html_output += f'\n\t</head>\n'
# html_output += f'\n\t<body>'
# html_output += f'\n\t\t<h1>{heading_content}</h1>'
# html_output += f'\n\t</body>'
# html_output += f'\n</html>'

# print(html_output)

# open_file = open(
#     "/Users/iMac/Projects/11055-PfD-2019-2/Project2/u3179194/Exercise3/isbn.txt")
# read_file = open_file.readlines()
# read_file = open_file.read()
# print(read_file)

with open("/Users/iMac/Projects/11055-PfD-2019-2/Project2/u3179194/Exercise3/isbn.txt") as open_file:
    open_file.seek(0)
    read_file = open_file.readlines()
    print(read_file)

html_file = open("index.html", "w+")
for line in read_file:
    html_file.write(line)
    print(line)

print(html_file)

print(type(read_file))
