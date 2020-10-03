// 3) Getting really comfortable with filter and map

//b)
var link = [
    "<a href=\”#\”>Hassan</a>",
    "<a href=\”#\”>Peter</a>",
    "<a href=\”#\”>Jan</a>",
    "<a href=\”#\”>Boline</a>"
];

var result = "<nav>" + link.map(function (nav) {
	return result = nav;
}).join(" ") + "</nav>";

document.getElementById("result").innerHTML = result;

//console.log(result);