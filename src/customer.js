const cname = document.querySelector("#name")
const Gender = document.querySelector("#gender")
const Phone = document.querySelector("#phone")
const State = document.querySelector("#state")
const City = document.querySelector("#city")
const Product = document.querySelector("#products")
const paymentType = document.querySelector("#payment")
const paymentDetails = document.querySelector("#pin")

const mgs = document.querySelector("#mgs")
const formSubmit = document.querySelector("#formData")

mgs.textContent = ''
formSubmit.addEventListener('click', function(e) {
    e.preventDefault()
    const custName = cname.value
    const gender = Gender.value
    const phone = Phone.value
    const state = Phone.value
    const city = City.value
    const prod = Product.value
    const ptype = paymentType.value
    const pdetails = paymentDetails.value
    console.log("test")
    fetch('http://localhost:8080/backend-Zoho/webapi/store/customer?name=' + custName + "&gender=" + gender + "&phone=" + phone + "&state=" + state + "&city=" + city + "&products=" + product + "&product=" + prod + "&ptype=" + ptype + "&pdetail=" + pdetails, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
    }).then(function(response) {
        if (response.status == 200) {
            mgs.textContent = 'Your invoice has been created (locally) '
        }
    })
})