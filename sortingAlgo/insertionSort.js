/**
 * Sort an array inputArr using insertionSort Algo
 * @param {inputArr}  
 */

let insertionSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 1; i < len; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while(j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

console.log(insertionSort([5, 1, 3, 7, 4, 9, 8, 12]));