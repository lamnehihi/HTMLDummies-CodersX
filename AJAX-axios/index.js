const axios = require('axios');
// Make a request for a user with a given ID
function get() {
    return axios.get('./db.json', {
        params: {
            ID: 1
        }
    });
}
function post() {
    return axios.post('db.json', {
        ID : 6,
        name: "Namm",
        number: "0123464",
        addr: "Ha Noi"
    });
}
// get().then(function (response) {
//     // handle success
//     console.log(response['data']);
// })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })

post().then(function (response) {
    // handle success
    console.log(response['data']);
}).catch(function (error) {
              //handle error
            console.log("error");
        })