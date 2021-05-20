const Name = document.querySelector("#name")
const Pass1 = document.querySelector("#pass1")
const Pass2 = document.querySelector("#pass2")
const mgs = document.querySelector('#mgs')
const signup = document.querySelector("#customerSignUp")

signup.addEventListener('click' , function(e) {
    e.preventDefault();
    const name = Name.value
    const password1 = Pass1.value
    const password2 = Pass2.value
    if(password1 != null && password2 != null && password1 == password2){
        fetch('http://localhost:8080/backend-Zoho/webapi/store/signup?name=' + name + '&password=' + password1, {  
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
    }).then(function(response) {
        if(response.status == 201){
            mgs.textContent = 'New Customer created successfully!'
        }else if(response.status == 208){
            mgs.textContent = 'Customer already exits! or Internal server error!'
        }
       console.log(response)
    })
    }else{
        mgs.textContent='Password mismatch!'
    }
})