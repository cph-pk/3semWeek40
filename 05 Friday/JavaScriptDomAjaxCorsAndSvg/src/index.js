import 'bootstrap/dist/css/bootstrap.css'

const url = 'http://restcountries.eu/rest/v1/alpha?codes=';
const countryText = document.getElementById('countryText');

let oldTarget = null;
const outer = document.getElementById("outer");

outer.onclick = function (e) {
    let target = e.target;
    if (oldTarget != null) {
        oldTarget.style.fill = '#c0c0c0';
    }
    oldTarget = target;
    target.style.fill = '#FF2D00';
    // document.getElementById("text").innerHTML = "You pressed: " + target.id;

    fetch(url + target.id)
        .then(res => fetchWithErrorCheck(res))
        .then((data) => {
            const countryInfo = data.map((country) => {
                return `Country: ${country.name}<br> 
            Population: ${country.population}<br> 
            Area: ${country.area}<br> 
            Borders: ${country.borders}`;
            });
            // const countryStr = countryInfo.join(' ');
            countryText.innerHTML = countryInfo;
        });

};


function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

