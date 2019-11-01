# importing requests
import urllib.request as request
import json

 
# writing out varibles makes troubleshooting eaiser
import logging
## regular expressions, easist way i could find to check that ISBN was 13 digits , using isdigits and length gets triped up on charage returns etc
import re

logging.basicConfig(filename='testwritter.log', filemode='w', format='%(asctime)s - %(levelname)s - %(message)s')
logging.warning('running ISBN script')

# opens and reads text file
txtisbn = open("ISBN.txt")
# writes html file 
htmlfile = open("out.html","w", newline="\n" , encoding="utf-8")


htmlfile.write('<!DOCTYPE html> \n')
htmlfile.write('<html> \n')
htmlfile.write('<head> \n')

htmlfile.write('</head> \n')
# make background colour light blue in html
htmlfile.write('<body bgcolor=#CB,F0,FE> \n') 

#Add openlibrary.org-cover, with Large book cover 
#Add openlibrary.org-author, title, publisher, subject, publish date, and number of pages in book.
imgstrA2 = '<img src="http://covers.openlibrary.org/b/isbn/'
imgstrB1 = '-L.jpg" />'
api1 = 'https://openlibrary.org/api/books?jscmd=data&bibkeys=ISBN:'


#Do loop
    #For each ISBN number in txt file.
        #Read the number 
    #IF no numbers 
        #Send error message 
        #End program 
    #Else check to see if numbers are valid
        #If numbers aren’t 
        #Send error message 
        #End program 
    #Else look for ISBN cover information large cover art.
	    #If cover art not found 
		#Write large cover art in html file
	    #Else move to book information 
for xlines in txtisbn:
    xlines.strip()
    if  re.match('[0-9]{13}', xlines): 
        #print(xlines)   
        logging.warning(f'processing ISDB {xlines.strip()} ')
        
        api_call_img = imgstrA2 + xlines.strip()  + imgstrB1
        htmlfile.write(f'{api_call_img} \n')
        logging.warning(f'api call img string {api_call_img} ')
        
        
        api_call = api1+xlines.strip()
        logging.warning(f'api call string {api_call}')
        response = request.urlopen(api_call)
        
        rawset = response.read().decode(response.headers.get_content_charset('utf-8'))
        logging.warning(f'api call response {rawset}')
        
        if rawset.startswith("var _OLBookInfo = "):
            filtered_rawset = rawset[18:]
            filtered_rawset = filtered_rawset.replace(';','')
        logging.warning(f'api call response stip non json start {filtered_rawset}')
        
        
       # Book Information- Find ISBN book author, title, --
       # publisher, subject, publish date, and number of pages in book.
       # look at each book, look for book information
       #IF not found 
            #Insert “NA”
        bookinfo = json.loads(filtered_rawset)
        logging.warning(f'json decode {bookinfo}')
        htmlfile.write(str('</p>'))
        
        for book in bookinfo:
            titlevar = bookinfo[book]['title'] if 'title' in bookinfo[book]['title'] else 'NA'
            authorvar =""
            publishvar = ""
            
            if 'authors' in bookinfo[book] :
                authorvar = bookinfo[book]['authors'][0]['name'] if 'name' in bookinfo[book]['authors'][0] else 'NA'
            else :
                authorvar ="NA"
            
            if 'publishers' in bookinfo[book] :
                publishvar = bookinfo[book]['publishers'][0]['name'] if 'name' in bookinfo[book]['publishers'][0] else 'NA'
            else :
                publishvar = 'NA'
            
            publishdatevar = bookinfo[book]['publish_date'] if 'publish_date' in bookinfo[book] else 'NA' 
            pagesvar =  bookinfo[book]['number_of_pages'] if 'number_of_pages' in bookinfo[book] else 'NA'
            print(json.dumps(bookinfo, indent=4, sort_keys=True))
            
            # Make HTML table for book information
            htmlfile.write(str("<table border=\"1\">\n"))
            htmlfile.write(str("<tr>\n"))
            htmlfile.write(str("<th>title</th> \n"))
            htmlfile.write(str(f'<td> {titlevar} </td></tr>\n'))
            
            htmlfile.write(str("<tr><th> author </th>"))
            htmlfile.write(str(f'<td> {authorvar} </td></tr>\n'))
            
            htmlfile.write(str("<tr><th>publisher</th>"))
            htmlfile.write(str(f'<td> {publishvar} </td></tr>\n'))
           
            htmlfile.write(str("<tr><th>subject</th>"))
            i = 0
            htmlfile.write(str(f'<td>'))
            if 'subjects' in bookinfo[book]:
                for sub in bookinfo[book]['subjects']:
                    subjects_var = bookinfo[book]['subjects'][i]['name'] if 'name' in bookinfo[book]['subjects'][i] else 'NA'
                    htmlfile.write(str(f' {subjects_var} </br>'))
                    i = i + 1
                htmlfile.write(str(f'</td></tr>\n'))
            else :
                htmlfile.write(str(f' NA </td>'))
            
            htmlfile.write(str("<tr><th>publish date</th>"))
            htmlfile.write(str(f'<td>{publishdatevar}</td>\n'))
                        
            htmlfile.write(str("<tr><th>pages </th>"))
            htmlfile.write(str(f'<td> {pagesvar} </td></tr>\n'))
                                   
            htmlfile.write(str('</tr></table> \n'))
        htmlfile.write(str('</p>'))
    else:
        logging.warning(f'invalid line not ISBN skipping')



htmlfile.write('</body>')
htmlfile.write('</html>')
# close files 
htmlfile.close()
txtisbn.close()


