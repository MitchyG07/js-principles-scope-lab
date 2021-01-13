// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "Anne"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    console.log(customerName); 
    return customerName
} 

function setBestCustomer() {
    bestCustomer = 'not bob'
} 

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "John"
}