// import { number } from "yargs";

  function capitalize (string){
    const stringArray = string.split("");

    const upperCased = stringArray[0].toUpperCase()
    const balanceString = stringArray.slice(1).join("");

    const newString = upperCased.concat(balanceString);



    return newString;
  }

  function reverseString(string){

    const splitArray = string.split("")
    const reversedArray = splitArray.reverse();

    return reversedArray.join("");
  }

  const calculator = {
    add: function(a,b){
        return a + b;
    },

    subtract: function(a,b){
        return a - b;
    },

    divide: function(a,b){
        return a / b;
    },

    multiply: function(a,b){
        return a * b
    }


  }


  function caesarCipher(string, shiftFactor){

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let shiftedAlphabet = []

    function shiftAlphabet(){
        shiftedAlphabet = alphabet.slice(shiftFactor);

        for (let index = 0; index < shiftFactor; index++) {
            shiftedAlphabet.push(alphabet[index]);
        }
    }

    shiftAlphabet()


    // Get position of letters

    const lowerCasedString = string.toLowerCase();
    const stringArray = lowerCasedString.split("");
    const stringPos = [];

    stringArray.forEach(letter => {
       let notFound = true;

        for (let i = 0; i < alphabet.length; i++) {
            const element = alphabet[i];

            if (letter === element) {
                stringPos.push(i);
                notFound = false;
                break;
            }
        }

        if (notFound) {
            stringPos.push(letter)
        }
    });



// Construct new string
    const newString = [];

    for (let j = 0; j < stringPos.length; j++) {
        const pos = stringPos[j];

        if (!(typeof pos === 'number')) {
            newString.push(pos);
            continue;
        }

        newString.push(shiftedAlphabet[pos])
        
    }

    

    function upperCaseCheck (){

        const stringArray = string.split("")

        const upperCasePos = [];

        for (let index = 0; index < stringArray.length; index++) {
            const letter = stringArray[index];
            

            if (letter === letter.toUpperCase()) {
                upperCasePos.push(index);
            }
        }

        upperCasePos.forEach(pos => {
           newString[pos] = newString[pos].toUpperCase();
        });

        const joinedString = newString.join("")

        return joinedString;

    }


    const result = upperCaseCheck();

    return result;
  }


  function analyzeArray(array){

    let sum = 0;

    array.forEach(element => {
        sum += element;
    });

    let average = sum/array.length

    let min = (function(){
        let lowest = array[0];


        array.slice(1).forEach(number => {
            if (lowest > number) {
                lowest = number
            }
        });

        return lowest;

    })()


    let max = (function(){
        let highest = array[0];

        array.slice(1).forEach(number => {
            if (highest < number) {
                highest = number
            }
        });

        return highest;

    })(); 

    let length = array.length


    return {average, min, max, length}
  }
  



  export{
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
  }
