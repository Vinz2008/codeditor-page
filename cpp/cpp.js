var theme = localStorage.getItem("theme");
function setThemeAce() {
    var theme = localStorage.getItem("theme");
    if (theme == "light") {
        editor.setTheme("ace/theme/github");
    } else if (theme == "dark") {
        editor.setTheme("ace/theme/dracula");
    }
}
document.getElementById('mycode').innerHTML = ""


var editor = ace.edit("mycode");
editor.setTheme("ace/theme/github")

editor.session.setMode("ace/mode/markdown");
editor.setOptions({
    maxLines: 33,
    minLines: 28,
    autoScrollEditorIntoView: true,
    keyboardHandler: null,
})
editor.resize()

var myCode = editor.getSession().getValue();

document.getElementById('output').innerHTML = run(myCode);

editor.session.on('change', function(delta) {
    var myCode = editor.getSession().getValue();
document.getElementById('output').innerHTML = run(myCode);

});


function saveStaticDataToFile() {
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.md");
}
var buttonTheme = document.getElementById('btn-toggle')
setThemeAce()
    
buttonTheme.addEventListener("click", function() {
    setThemeAce();
});

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
    // Prevent the Save dialog to open
    e.preventDefault();
    // Place your code here
    console.log('CTRL + S');
    saveStaticDataToFile();
    }
    });



function run(code) {
 /*   var code = 	"#include <iostream>"+
    "using namespace std;"+
    "int main() {"+
    "    int a;"+
    "    cin >> a;"+
    "    cout << 'h' << endl;"+
    "    return 0;"+
    "}"
;*/

var input = "4321";
var output = "";
	var config = {
		stdio: {
			write: function(s) {
				output += s;
			}
		},
		unsigned_overflow: "error" // can be "error"(default), "warn" or "ignore"
	};
	var exitCode = JSCPP.run(code, input, config);
	alert("\nprogram exited with code " + exitCode);
    return output

}

/*

#include <iostream>
using namespace std;
int main() {
int a;
cin >> a;"
cout << 'h' << endl;
return 0;
}

*/