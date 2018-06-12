/* 
Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. 
You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should 
be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg". 
*/


function sortByString(s,t) {
  let output = "";
  let lettersInStringS = {};

  /* 
  This loops over our string, s, and keeps a count of each letter in the string in our lettersInStringS hashmap. 
  */
  for (let i = 0; i < s.length; i++) {
    if (!lettersInStringS[s[i]]) {
      lettersInStringS[s[i]] = 1;
    } else {
      lettersInStringS[s[i]]++;
    }
  }

  /* 
  Loops over our string, t, and for each letter, add's it x number of times to our output string depending on 
  the letter's key-pair value in the lettersInStringS hashmap 
  */
  for (let j = 0; j < t.length; j++) {
    output += t[j].repeat(lettersInStringS[t[j]]);
  }
  return output;
}

console.log(sortByString("weather", "therapyw"))
console.log(sortByString('good', 'odg'))