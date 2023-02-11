function translate(str) {
    //verification to check if its empty
    if (str == "") {
        return "Please enter a word."
    }
    
    //create arrays for tracking vowels upper and lower letter
    var vowels = ["a","e","i","o","u"];
    
    //all letters to lowerCase in case the user type some upperCase vowel
    //split the sentence into an array of words
    var word = str.toLowerCase();
    var sentence = word.split(/(?=[!?.,])|[_-\s]/).filter(x => x);
    var result = [];
    
    //to work in sentece array and translate each word
    //while the incremente is less than sentece size it works
    for (let i = 0; i < sentence.length; i++) {
    
      //split the current word by first vowel
        var arr = sentence[i].split(/([aeiou])/).filter(x => x);
        var firstLetter = "";
        
        if (vowels.indexOf(arr[0]) != -1) {
            firstLetter = "vowel";
        }
        
        //switch statement to add the sufix ya and way
        switch (firstLetter) {
          case 'vowel':
            if (vowels) {
            arr.push("way"); 
            }
          break;
          default:
          //.shift method returns the first element of the array, then transforme to lower case and .push to add this element in the end + add sufix ay
            arr.push(arr.shift());
            arr.push('ay');
          break;
      }

      //output arr of strings
    result.push(arr.join(''));
    }
    
    //return final string with spaces
    return result.join(" ");
    }

    //Button Control
    var translateBtn = document.getElementById('translateBtn');
    translateBtn.onclick = function () {
    var inputText = document.getElementById('inputText').value;
    var outputText = document.getElementById('outputText').value = translate(inputText);
};