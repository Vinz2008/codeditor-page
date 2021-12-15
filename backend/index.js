const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require("child_process");
const app = express();
const port = 8000;


var fs = require('fs');
const { stdout, stderr } = require("process");
function run(code) {
fs.writeFile('script.py',code, function (err) {
    if (err) throw err; {
    console.log("");
    }
});
exec("python3 script.py", (err, stdout, stderr) => {
    var output = stdout
    console.log(output)
    app.get('/', (req, res) => res.send(output));
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})
}

run("print('This is my api')")

