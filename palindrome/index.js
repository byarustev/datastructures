// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //solution for comparing item from start to item at end
    //abccba
    //^----^
    // ^--^
    //  ^^

    return str.split('').every((char,i)=>char===str[str.length-(i+1)])
    //every is an advanced array helper

}

module.exports = palindrome;


// function palindrome(str) {
//     let reversed = str
//                     .split('')
//                     .reverse()
//                     .join('')

//     if(reversed===str) 
//     return true
//     return false;
// }