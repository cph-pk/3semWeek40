import 'bootstrap/dist/css/bootstrap.css'


const url = 'http://localhost:3333/api/users';

/*
Get all users
*/
const tb = document.getElementById('tb');
fetch(url)
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const trs = data.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`;
        });
        const trStr = trs.join('');
        tb.innerHTML = trStr;
    })
    .catch(err => {
        if (err.status) {
            err.fullError.then(e => console.log(e.detail))
        }
        else { console.log("Network error"); }
    })

/*
Error check
*/
function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

/*
Function for POST, PUT and DELETE
*/
function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}


/*
Get user by id
*/
document.getElementById('btn_UserByID').onclick = () => {
    const id = document.getElementById('inp_UserByID').value;
    fetch(`${url}/${id}`)
        .then(res => fetchWithErrorCheck(res))
        .then(user => {
            const userStr = `${user.name} has email: ${user.email}. ${(user.gender === 'female') ? 'She' : 'He'} is ${user.age} years old`;
            document.getElementById('txt_userByID').innerHTML = userStr;
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        })
};

/*
Insert user
*/
document.getElementById('btn_inserPerson').onclick = () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const data = {
        name: name,
        age: age,
        gender: gender,
        email: email
    };
    const options = makeOptions("POST", data);
    fetch(url, options)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        })

};

/*
Update user
*/
document.getElementById('btn_updatePerson').onclick = () => {
    const id = document.getElementById('uid').value;
    const name = document.getElementById('uname').value;
    const age = document.getElementById('uage').value;
    const gender = document.getElementById('ugender').value;
    const email = document.getElementById('uemail').value;
    const data = {
        name: name,
        age: age,
        gender: gender,
        email: email
    };
    const options = makeOptions("PUT", data);
    fetch(`${url}/${id}`, options)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        })

};

/*
Delete user
*/
document.getElementById('btn_deletPerson').onclick = () => {
    const id = document.getElementById('did').value;
    const options = makeOptions("DELETE");
    fetch(`${url}/${id}`, options)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        })
   
}