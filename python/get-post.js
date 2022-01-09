/*
fetch('/python')
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log('GET response text:');
        console.log(text); // Print the greeting as text
    });

fetch('/python')
    .then(function (response) {
        return response.json(); // But parse it as JSON this time
    })
    .then(function (json) {
        console.log('GET response as JSON:');
        console.log(json); // Here’s our JSON object
    })
*/
function run() {
    const params = {
        code: "print('hello')", 
    };
    const options = {
        method: 'POST',
        body: JSON.stringify( params ), 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        
    };
fetch('https://python-interpreter1.herokuapp.com/input'/*'http://localhost:8000/input'*/, options
).then(function (response) { 
    return response.text();
}).then(function (text) {

    console.log('POST response: ');

    // Should be 'OK' if everything was successful
    console.log(text);
});
}