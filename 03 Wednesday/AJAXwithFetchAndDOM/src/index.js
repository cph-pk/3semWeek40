import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
// import navigation from "./navigation";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");

// fetch joke
document.getElementById('btn_joke').addEventListener('click', function () {
    const jokeId = document.getElementById('inp_joke').value;
    document.getElementById('txt_joke').innerHTML = jokes.getJokeById(jokeId);
});

// insert joke
document.getElementById('btn_jokeIns').addEventListener('click', function () {
    const jokeInsert = document.getElementById('inp_jokeIns').value;
    jokes.addJoke(jokeInsert);
});

// Opg 2
// Fetch quote from external api
document.getElementById('btn_quote').addEventListener('click', function () {
    fetch(' https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById('div_quote').innerText = data.joke;
        });

});

/*
Opg 2.5

By monitoring the network tab we are able to see that the qoute is updated every hour and therefor the quote gets a new ID.
It is possible because the only way to overcome the same-origin policy is to ensure that the requested resource from other 
origins includes the right HTTP headers such as Access-Control-Allow-Origin. In our case it is set with the wildcard * which means all.

Note to self:

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web 
application running at one origin, access to selected resources from a different origin.


Ajax short for Asynchronous JavaScript and XML  is a set of web development techniques using many web technologies on 
the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from 
a server asynchronously (in the background) without interfering with the display and behaviour of the existing page. 
By decoupling the data interchange layer from the presentation layer, Ajax allows web pages and, 
by extension, web applications, to change content dynamically without the need to reload the entire page.

The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin 
can interact with a resource from another origin. It helps isolate 
potentially malicious documents, reducing possible attack vectors.
*/

// Opg 2.6
// Fetch quote from external api using steInterval() 
function getQuote() {
    fetch(' https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById('div_quoteHour').innerText = data.joke;
        });
}
getQuote(); // Get quote first time
setInterval(getQuote, 3600000);

// Opg 3
// Get internal id from svg and display message
document.getElementById("north").addEventListener("click", function() {
    document.getElementById("compass").innerHTML = "North";
 });
 
 document.getElementById("south").addEventListener("click", function() {
     document.getElementById("compass").innerHTML = "South";
 });
 
 document.getElementById("west").addEventListener("click", function() {
     document.getElementById("compass").innerHTML = "West";
 });
 
 document.getElementById("east").addEventListener("click", function() {
     document.getElementById("compass").innerHTML = "East";
 });

