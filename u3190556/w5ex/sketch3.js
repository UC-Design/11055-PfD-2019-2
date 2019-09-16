var person = prompt('please enter your name','I want to be an Artist');
        var txtr = "";
        if (person == null || person ==""){
            txtr = 'user cancelled the prompt.';
        }else{
            txtr = myFirstFunction(person);
        }
        documet.write(txtr);

        function myFristFunction (name){
            var txt= 'hello' +name+ ',have a great day!';
            return txt;
        }