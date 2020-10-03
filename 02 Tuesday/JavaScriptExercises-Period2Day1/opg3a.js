// 3) Getting really comfortable with filter and map

// a)
var numbers = [1, 3, 5, 10, 11];
let callback;
let result;


function myFunction(array, callback) {
    let result = array.map((x, idx, arr) => idx < arr.length - 1 ? x + arr[idx + 1] : x);
    callback(result);
}

function myResult(result) {
    console.log(result);
}

myFunction(numbers, myResult);
// var result = [4,8,15,21,11];


/* 
x =  The current element being processed in the array.
idx = The index of the current element being processed in the array.
arr = The array map was called upon. 

https://stackoverflow.com/questions/54991798/i-want-to-add-the-previous-number-to-the-current-number-in-an-array-in-javascript
*/
