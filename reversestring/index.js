// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str. split('').reduce((acc, char)=>char+acc,'')
  } 

module.exports = reverse;
  
// 1
// function reverse(str) {
//     return str
//             .split('')
//             .reverse()
//             .join('')
// } 

// 2
// function reverse(str) {
//     let reversedStr='';

//     for(let i=0; i<str.length; i++){
//         reversedStr=str[i]+reversedStr
//     } 
//     return reversedStr
//   } 

// 3
// function reverse(str) {
//     return str.split('').reduce((reversed, char)=>{
//         return char+reversed
//     },'')
//   } 
