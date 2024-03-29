// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    result = str[0].toUpperCase();
    for(let i=1;i<str.length; i++){
        if(str[i-1]===" "){//letter to the left
            result+=str[i].toUpperCase()
        }else{
            result+=str[i]
        }
    } 
    return result;
}

module.exports = capitalize;

// function capitalize(str) {
//     return str.split(' ').map(word=>{
//         return word[0].toUpperCase()+word.slice(1)
//     }).join(' ')
// }