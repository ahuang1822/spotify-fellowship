/* 
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is 
repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa" 
*/


function decodeString(s) {
  let lettersAndNumbers = filterOutBrackets(s);
  return decodeThis(lettersAndNumbers.slice(1), lettersAndNumbers[0]);
}

/* 
Removes brackets from the input string and splits the remaining characters in the string into numbers 
and letters such that an input of 123abc456def will render an output of ['123', 'abc', '456', 'def']
*/
function filterOutBrackets (str) {
  let lettersAndNumbers = [];
  let possibleNumber= '';
  for (let i = 0 ; i < str.length; i++) {
    if (parseInt(str[i])) {
      possibleNumber += str[i];
    } else if (str[i] === '[' || str[i] === ']') {
      lettersAndNumbers.push(possibleNumber);
      possibleNumber = '';
    } else {
      lettersAndNumbers.push(possibleNumber);
      lettersAndNumbers.push(str[i]);
      possibleNumber = '';
    }
  }
  return lettersAndNumbers;
}

/* 
Loops through the elements in the array 'num' number of times. If the element is a letter, it will be appended 
to the our output string which is initiall ''. If the element is a number, the function will recursively call 
itself with the remaining element in the array as our new array and the number we are at as the number. An input 
of "(['b', '3', 'a', 'c'], 2)" will render an output of 'baaabaaa' 
*/
function decodeThis(array, num) {
  let output = '';
  for (let i = 0; i < num; i++) {    
    for (let j = 0; j < array.length; j++) {      
      if (!parseInt(array[j])) {
        output += array[j];
      } else {
        output += decodeThis(array.slice(j + 1), array[j])
      }
    }    
  }
  return output;
} 

console.log(decodeString("4[ab]"))
console.log(decodeString("2[b3[a]]"))
