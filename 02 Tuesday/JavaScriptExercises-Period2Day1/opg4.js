// 4. reduce

// a)
var all = ["Hassan", "Peter", "Carla", "Boline"];

var result = all.join("#");

console.log(result);

// b)
var numbers = [2, 3, 67, 33];

var result2 = numbers.reduce(addAllNumbersInArray);

function addAllNumbersInArray(total, num) {
    return total + num;
}

console.log(result2);

// c)
let initialValue = 0

let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
]

let total = members.reduce(function (accumulator, member) {
    return accumulator + member.age;
}, initialValue)

let average = total / members.length;

console.log(average);

// d)
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

var initialValue2 = {}

var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}

var result4 = votes.reduce(reducer, initialValue2)

console.log(result4);

// version vist i undervisning
// const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

// result = votes.reduce((accu, candidate) =>{
//     accu[candidate] = accu[candidate] ? accu[candidate] + 1 : 1;
//     return accu;
// },{});
// console.log(result);