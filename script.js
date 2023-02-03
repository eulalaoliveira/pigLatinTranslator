function translate(str) {
    //error if empty field
    if (str == "") {
        return "Please enter a valide word."
    }
    
    //create arrays for tracking true vowels and punctuation
    var vowels = ["a","e","i","o","u","A","E","I","O","U"];
    var punc = [".","?","!",",","\"","'"];
    
    //split the sentence into an array of words
    var sentence = str.split(/(?=[!?.,])|[_-\s]/).filter(x => x);
    var result = [];
    
    //iterate through sentence array and translate each word
    for (let i = 0; i < sentence.length; i++) {
    
      //split the current word by first vowel
        var arr = sentence[i].split(/([aeiouAEIOUyY])/).filter(x => x);
        var firstLetter = "";
        
      //set switch case based on first letters
        if (/[^a-zA-Z]/.test(arr[0])) {
            firstLetter = "punc";
        } else if (/[yY]/.test(arr)) {
            firstLetter = "y";
        } else if (vowels.indexOf(arr[0]) != -1) {
            firstLetter = "vowel";
        }
        
      //switch statement for handling different word starts
        switch (firstLetter) {
        case 'punc':
          //do nothing to avoid appending suffix to special characters
        break;
        case 'y':
        if (/[aeiouAEIOU]/.test(arr)) {
            while (vowels.indexOf(arr[0].charAt(0)) == -1) {
            arr.push(arr.shift().toLowerCase());
            }
            arr.push('ay');
        } else {
            arr.push(arr.shift().toLowerCase());
            arr.push('ay');
        }
        break;
        case 'vowel':
        if (/[yY]/.test(arr[arr.length-1])) {
        arr.push("ay");
        } else {
        arr.push("way"); 
        }
        break;
        default:
        arr.push(arr.shift().toLowerCase());
        arr.push('ay');
        break;
    }

      //output arr of strings
    result.push(arr.join(''));
    }
    
    //return final string with spaces before punctuation removed
    return result.join(" ").replace(/\s([?.!,])/gi, '$1');
    }

    //Button Control
    var tButton = document.getElementById('tButton');
    tButton.onclick = function () {
    var inputText = document.getElementById('inputText').value;
    var outputText = document.getElementById('outputText').value = translate(inputText);
};

