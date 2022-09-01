const id = document.querySelector('#id')
const passwd = document.querySelector('#passwd')
const loginBtn = document.querySelector('button')

loginBtn.addEventListener('click', login);

function login () {
    const req = {
        id : id.value,
        passwd : passwd.value,
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => console.log(res));
}