// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/***
 * algorithm (using slice)
 * 1. create an empty chunked array
 * 2. create start index at 0
 * 3. while index < array.length
 *    3.1 push a slice of length size from array into chuncked
 *    3.2 add size to index
 *
 * NB. slice(startIndex, endIndex<--notinclusive)      
 */
function chunk(array, size) {
    let chuncked=[]
    let index = 0;
    while(index<array.length){
        let sliced=array.slice(index,size+index)
        chuncked.push(sliced)

        index+=size
    }

    return chuncked;
}

// chunk([1, 2, 3, 4], 2);

module.exports = chunk;

/***
 * algorithm
 * 1. create empty array to hold chucks called chunked
 * 2. for each element in the unchunked array
 *    2.1 retrieve the last element in the chunked
 *    2.2 if the last element does not exist or its length is equal to chunk size
 *        2.2.1 push a new chunk into chunked with the current element
 *    2.3 else add the current element to the chunk 
 * 
 */
// function chunk(array, size) {
//     let chunked=[]
//     array.map((item)=>{
//         let lastItem = chunked[chunked.length-1]; //NB. its by reference so .push mutates the original source
//         if(lastItem && lastItem.length!==size){
//             lastItem.push(item)
//         }else{
//            chunked.push([item,]) 
//         }
//     })

//     return chunked;
// }