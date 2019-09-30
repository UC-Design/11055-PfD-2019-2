 var helloarray = ["Hello", "world", "how", "are", "you", "today"];
            //window.alert(helloarray[0] + " " + helloarray[1] +"!");
        //array is a collection of variables stored in one place, all of one type. e.g. this is an array all of strings. you cannot put numbers in this array.
           for (var i = 0; i < helloarray.length; i++) {
               document.write(" " + helloarray[i]);
           } 
            //this one is creating a for loop, so it repeats and writes everyword in the array in the alert, but instead of typing in the number of things ourselves, we are using a command that you can do with arrays that tells you how many things are in the array. there are 6 things in the array, so it gives us the number 6, so it is  < 6 which works, because the array starts at 0 so goes 0,1,2,3,4,5, which is 6. and at the same time, less than 6. if that makes sense.  
            
            //and one again my for loop doesn't work... it shows me hello, 6 times. but i changed it from a alert to a doc write and it works...
            document.write("?")
            //i wanted to put a quesiton mark at the end... but you cant put it in the loop of course also i put the space before the words or else the questionmark is separated by the word with a space. now it's fine, but technically there is a space in front of the words too. not sure how to put in a space after everyone, except the one at the end.