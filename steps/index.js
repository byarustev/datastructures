// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let pounds=1;
    let steps=n-1;
    while(pounds<=n){
        console.log(generateCharacter('#',pounds)+generateCharacter(' ',steps));
        pounds++;
        steps--;
    }
}

function generateCharacter(char, times){
    let result=""
    for(let i=0;i<times;i++){
        result+=char
    }
    return result;
}

module.exports = steps;
