const userName = document.querySelector('#name')
const pass = document.querySelector('#password')
const form = document.querySelector('#customerLogin')
const mgs = document.querySelector('#mgs')
mgs.textContent = ''
form.addEventListener('click' , function(e) {
    e.preventDefault();
    const name = userName.value
    const password = pass.value
    fetch('http://localhost:8080/backend-Zoho/webapi/store/login?uname=' + name + "&password=" + password, {  
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
    }).then(function(response) {
        if(response.status == 201){
            mgs.textContent = 'Logged in, please wait redirecting...'
            setTimeout(function(){
                document.location.href = 'customer.html'
            },3000)
        }else if(response.status == 208){
            mgs.textContent = 'Authentication failed!'
        }
       console.log(response)
    })
})