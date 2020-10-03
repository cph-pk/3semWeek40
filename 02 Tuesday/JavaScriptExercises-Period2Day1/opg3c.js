// 3) Getting really comfortable with filter and map

// c)
var persons = [
    {name:"Hassan",phone:"1234567"}, 
    {name: "Peter",phone: "675843"}, 
    {name: "Jan", phone: "98547"},
    {name: "Boline", phone: "79345"}
];

var personsToTable = "<table><thead><tr><th>Name</th><th>Phone</th></tr></thead><tbody>" + persons.map(function (person) {
    return "<tr><td>" + person.name + "</td><td>" + person.phone + "</td></tr>";
}).join("") + "</tbody><table>";

document.getElementById("result").innerHTML = personsToTable;