const form = document.querySelector("#formData")
const pID = document.querySelector("#pid")
const pName = document.querySelector("#pname")
const Pquant = document.querySelector("#pqnt")
const PCost = document.querySelector("#cost")
const prem = document.querySelector("#premium")
const non_prem = document.querySelector("#non-premium")
const mgs = document.querySelector("#mgs")
mgs.textContent = ''

form.addEventListener('click', function(e) {
    e.preventDefault()
    const pid = pID.value
    const pname = pName.value
    const pcost = PCost.value
    const pquant = Pquant.value
    let type = null;
    console.log(pcost)
    console.log(pquant)
    if(prem.checked){
        type = prem.value
    }else{
        type = non_prem.value
    }
    fetch('http://localhost:8080/backend-Zoho/webapi/store/admin?pid=' + pid + '&pname=' + pname + '&pquant=' + pquant + '&price=' + pcost + '&type=' + type, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
    }).then(function(response) {
        if (response.status == 201) {
            mgs.textContent = 'Product added successfully!'
        } else if (response.status == 208) {
            mgs.textContent = 'Product already exist in database!'
        }else if(response.status == 500){
            mgs.textContent = 'Failure of product update!, Internal server error!'
        }
        console.log(response)
    })
})