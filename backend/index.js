const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require("child_process");
const app = express();
const port = process.env.PORT || 8000;;
const cors = require('cors');
app.use(cors({origin: '*'}))
app.use(bodyParser.json())
/*app.use((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  });

*/
var fs = require('fs');
const { stdout, stderr } = require("process");
global.output = ""
function run(code) {
    fs.writeFile('script.py',code, function (err) {
        if (err) throw err; {
            console.log("Error");
    }});
    exec("python3 script.py", (err, stdout, stderr) => {
        output = stdout
        console.log(output)
        /* app.get('/output', (req, res) => res.send(output));
        app.listen(port, () => console.log(`Api output listening on port ${port}!`));
*/

    //return output
    })
    return output
}
var code = ""
app.post('/input', (req, res) => {
    /*res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");*/
code = req.body.code;
console.log(`code: ${code}`)
console.log(run(code))
res.status(200).send(run(code))

/*app.get('/output', (req, res) => res.send(run(code)));*/

});

app.listen(port, () => console.log(`Api input listening on port ${port}!`));
