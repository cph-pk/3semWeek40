import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

/*
Get all users
*/
const tb = document.getElementById('tb');
const url = 'https://cphper.dk/cors/api/person/';

fetch(url +"/all")
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const trs = data.all.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.phone}</td></tr>`;
        });
        const trStr = trs.join('');
        tb.innerHTML = trStr;
    });


function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}


