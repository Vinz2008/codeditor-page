const { exec } = require("child_process")
var fs = require('fs');
const { stdout, stderr } = require("process");
function run(code) {
fs.writeFile('script.py','', function (err) {
    if (err) throw err; {
    console.log("")
    }
});
exec("python3 script.py", (err, stdout, stderr) => {
    var output = stdout
})
}

