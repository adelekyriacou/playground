function isPangram(sentence) {
  var sentenceLower = sentence.toLowerCase(); // makes all characters lowercase
  var alpha = 'abcdefghijklmnopqrstuvwxyz'; // assigns string to variable
  var alphaArray = alpha.split(''); // splits string into array & assigns to variable
  var hasEveryLetter = true; // assigns true to variable
 
  alphaArray.forEach(function (letter) { // for each letter in array pass letter into function
    if (stringDoesntContainCharacter(sentenceLower, letter)) { // if 
      hasEveryLetter = false;
    }
  });
 
  return hasEveryLetter;
}
 
function stringDoesntContainCharacter(str, c) { // two parameters, string & characater
  return str.indexOf(c) === -1; // returns true when c isn't in string
}
 
//str.indexOf(c) = tells where the character first appears in the string, index form.
//                 returns -1 if it doesn't appear in string at all.

module.exports = isPangram;