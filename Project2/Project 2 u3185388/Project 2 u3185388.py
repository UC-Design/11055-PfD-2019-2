import urllib.request
import json
import textwrap
import webbrowser

while True:
    base_api_link = "https://www.googleapis.com/books/v1/volumes?q=isbn:"
    base_img_link = "http://covers.openlibrary.org/b/isbn/"
    user_input = input("Enter ISBN 13: ").strip()

    try:  # check input value only for the numbers
        value = int(user_input)
    except ValueError:
        print("\nERROR! Please type the correct ISBN 13." + "\n")
        continue

    if len(user_input) == 13:  # check the length of the input value

        with urllib.request.urlopen(base_api_link + user_input) as f:

            text = f.read()
            decoded_text = text.decode("utf-8")
            obj = json.loads(decoded_text)
            volume_info = obj["items"][0]
            authors = obj["items"][0]["volumeInfo"]["authors"]

            # display book information in Python
            print("\nTitle:", volume_info["volumeInfo"]["title"])
            print("\nSummary:\n")
            print(textwrap.fill(volume_info["searchInfo"]["textSnippet"], width=65))
            print("\nAuthor(s):", ",".join(authors))
            print("\nPublisher:", volume_info["volumeInfo"]["publisher"])
            print("\nPublished date:", volume_info["volumeInfo"]["publishedDate"])
            print("\nPage count:", volume_info["volumeInfo"]["pageCount"])
            print("\nLanguage:", volume_info["volumeInfo"]["language"])
            print("\n")

            # display book information in html
            image = base_img_link + user_input + ".jpg"

            # create a table
            strTable = '<html><table><tr><td><img src = "' + image + '" height = "420" width = "296" /></td></tr>'
            tr0 = '<tr><td>Title</td><td>' + str(volume_info["volumeInfo"]["title"]) + '</td></tr>'
            tr1 = '<tr><td>Summary:</td><td>' + str(
                textwrap.fill(volume_info["searchInfo"]["textSnippet"])) + '</td></tr>'
            tr2 = '<tr><td>Author(s):</td><td>' + str(",".join(authors)) + '</td></tr>'
            tr3 = '<tr><td>Publisher:</td><td>' + str(volume_info["volumeInfo"]["publisher"]) + '</td></tr>'
            tr4 = '<tr><td>Published date:</td><td>' + str(volume_info["volumeInfo"]["publishedDate"]) + '</td></tr>'
            tr5 = '<tr><td>Page count:</td><td>' + str(volume_info["volumeInfo"]["pageCount"]) + '</td></tr>'
            tr6 = '<tr><td>Language:</td><td>' + str(volume_info["volumeInfo"]["language"]) + '</td></tr>'

            strTable = strTable + tr0 + tr1 + tr2 + tr3 + tr4 + tr5 + tr6 + '</table></html>'

            # generate html file
            hs = open("Project2 - u3185388.html", "w")
            hs.write(strTable)
            hs.close()

            # automatically open html file
            webbrowser.open_new_tab("Project2 - u3185388.html")

            # type another ISBN 13 or exit
            status_update = input("\nEnter another ISBN 13? y or n: ").lower().strip()

            if status_update == "n":
                print("\nThank you! Have a good one." + "\n")
                break

    else:
        print("\nERROR! Please type the correct ISBN 13." + "\n")