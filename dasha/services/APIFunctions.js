// import $ from 'jquery';

var port = "8080"
var apiURL = `http://20.84.53.107:${port}/`
var apiCode = "12345"

function createWallet(password) {
    var url = apiURL + `create?password=${password}&api_code=${apiCode}`
    //     $.ajax({
    //         url: url,
    //         type: "GET",
    //         success: function (result) {
    //             return result['guid']
    //         },
    //         error: function (result) {
    //             console.log(result)
    //         }
    //     })
    fetch(url)
        .then(response => {
            return response.json();
        })
}

function getBalance(guid, password) {
    var url = apiURL + `merchant/${guid}/balance?password=${password}&api_code=${apiCode}`
    // $.ajax({
    //     url: url,
    //     type: "GET",
    //     success: function (result) {
    //         return result['balance']
    //     },
    //     error: function (result) {
    //         console.log(result)
    //     }
    // })
    fetch(url)
        .then(response => {
            return response.json();
        })

}

function sendCoins(guid, to, amount, password) {
    var url = apiURL + `merchant/${guid}/payment?to=${to}&amount=${amount}&password=${password}&api_code=${apiCode}`
    //     $.ajax({
    //         url: url,
    //         type: "GET",
    //         success: function (result) {
    //             return result['message']
    //         },
    //         error: function (result) {
    //             console.log(result)
    //         }
    //     })
    fetch(url)
        .then(response => {
            return response.json();
        })
}

function verifyLogin(guid, password) {
    var url = apiURL + `merchant/${guid}/balance?password=${password}&api_code=${apiCode}`
    //     $.ajax({
    //         url: url,
    //         type: "GET",
    //         success: function (result) {
    //             if (result['error'] == "Main wallet password incorrect") return false
    //             else return true
    //         },
    //         error: function () {
    //             false
    //         }
    //     })
    fetch(url)
        .then(response => {
            return response.json();
        })
}