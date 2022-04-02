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

function run(code) {
    var url = "https://python-interpreter1.herokuapp.com/input"
    //var url = "https://code-editor-page-api-python-vinz2008.vercel.app/input"
    reg1 = /"/g
    code = code.replace(reg1,"'")
    console.log("input after regex: " + code)
    const params = {
        code: code, 
    };
    const options = {
        method: 'POST',
        body: JSON.stringify( params ), 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        
    };
 fetch(url/*'http://localhost:8000/input'*/, options
).then(function (response) { 
    return response.text();
}).then(function (text) {
    globalThis.output = ""
    console.log('POST response: ' + text);

    // Should be 'OK' if everything was successful
    output = text
    reg2 = /\n/g
var newOutput
newOutput = output.toString().replace(reg2, "<br>")
output = newOutput
console.log("output after regex:" + output)
return output;
/*if (output == "[object HTMLDivElement]") {
    output = "loading"
    run(code)
}*/

});
/*setTimeout(function() {
    return output;
}, 4500 )*/
    return output

}