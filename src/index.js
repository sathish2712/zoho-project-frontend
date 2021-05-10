const form = document.querySelector("#formData")
const pID = document.querySelector("#pid")
const pName = document.querySelector("#pname")
const PCost = document.querySelector("#cost")
const mgs = document.querySelector("#mgs")
mgs.textContent = ''

form.addEventListener('click', function(e) {
    e.preventDefault()
    const pid = pID.value
    const pname = pName.value
    const pcost = PCost.value
    fetch('http://localhost:8080/backend-Zoho/webapi/store/admin?pid=' + pid + '&pname=' + pname + '&price=' + pcost, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
    }).then(function(response) {
        if (response.status == 200) {
            mgs.textContent = 'Product added successfully!'
        } else if (response.status == 201) {
            mgs.textContent = 'Product already exist in database!'
        }
        console.log(response)
    })
})