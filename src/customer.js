const cname = document.querySelector("#name")
const formSubmit = document.querySelector("#formData")
formSubmit.addEventListener('click', function(e) {
    e.preventDefault()
    const custName = cname.value
    console.log("test")
    fetch('http://localhost:8080/backend-Zoho/webapi/store/customer?name=' + custName, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
    }).then(function(response) {
        console.log(response)
    })
})