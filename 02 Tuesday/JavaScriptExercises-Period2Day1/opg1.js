// 1) Using existing functions that takes a callback as an argument


let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];

// a) Using the filter method:
let namesWitLetterA = names.filter(nms => nms.includes("a"));

// b) Using the map method:
let newArray = names.map(namesForReverse);

function namesForReverse(names) {
    return names.split("").reverse().join("");
}

console.log(namesWitLetterA);
console.log(newArray);
