// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// other problems that can be solved using the same technique
// does a string A have the same characters as string B (is it and anagram)
// does the given string have any repeated character in it?

function maxChar(str) {
    // techique build an object with char-> count   
    
    let charCount={};
    str.split('').map((char)=>{
        charCount[char] = charCount[char]+1 || 1 // if it exists increament or assign 1   
    })

    let maxChar =undefined;
    for(let key in charCount){
        let value = charCount[key];
        if(maxChar===undefined){
            maxChar=key 
        }
        if(value>charCount[maxChar]){
            maxChar = key
        }
    }

    return maxChar

}

module.exports = maxChar;
  