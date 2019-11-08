// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//soln 2
function anagrams(stringA, stringB) {
    return cleanString(stringA)===cleanString(stringB);

}

function cleanString(str){
    return str
            .replace(/[^\w]/g,'')
            .toLowerCase()
            .split('')
            .sort()
            .join('')
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     //remove specials xters and put tolower case
//     stringA.replace(/[^\w]/g,'').toLowerCase();
//     stringB.replace(/[^\w]/g,'').toLowerCase();

//     //create xter map
//     stringMapA =buldCharMap(stringA);

//     stringMapB = buldCharMap(stringB);

//     if(stringA.length!==stringB.length){
//         return false
//     }

//     for(char in stringMapB){
//         if(stringMapB[char]!==stringMapA[char]){
//             return false
//         }
//     }

//     return true

// }

// function buldCharMap(str){
//     //create xter map
//     charMap ={}
//     str.split('').sort().map(item=>{
//         charMap[item]=charMap[item]+1 || 1
//     });

//     return charMap;
// }