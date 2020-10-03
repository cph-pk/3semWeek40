// 2) Implement user defined functions that take callbacks as an argument

let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];
let callback;
let result;

// a)
function myFilter(array, callback) {
    let namesWitLetterA = array.filter(nms => nms.includes("a"));
    callback(namesWitLetterA);
}

function myFilterResult(result) {
    console.log(result);
}

myFilter(names, myFilterResult);

// b)
function myMap(array, callback) {
    let newArray = array.map(namesForReverse);

    function namesForReverse(names) {
        return names.split("").reverse().join("");
    }

    callback(newArray);
}

function myMapResult(result) {
    console.log(result);
}

myMap(names, myMapResult);
