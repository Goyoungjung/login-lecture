const id = document.querySelector('#id');
const name = document.querySelector('#name');
const passwd = document.querySelector('#passwd');
const comfirmPasswd = document.querySelector('#comfirm-passwd');

const registerBtn = document.querySelector('button');

registerBtn.addEventListener('click', register);

function register () {
    if (!id.value) return alert('아이디를 입력해주십시오.');
    if (passwd.value !== comfirmPasswd.value) return alert('비밀번호가 일지하지 않습니다.');
    
    const req = {
        id : id.value,
        name : name.value,
        passwd : passwd.value, 
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = '/login';
        }
        else {
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(('register error'))
    })
}