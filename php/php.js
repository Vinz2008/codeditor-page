var theme = localStorage.getItem("theme");
function setThemeAce() {
    var theme = localStorage.getItem("theme");
    if (theme == "light") {
        editor.setTheme("ace/theme/github");
    } else if (theme == "dark") {
        editor.setTheme("ace/theme/dracula");
    }
}
document.getElementById('mycode').innerHTML = `<?php
echo "Hello World!";
?> 
`


var editor = ace.edit("mycode");
editor.setTheme("ace/theme/github")

editor.session.setMode("ace/mode/php");
editor.setOptions({
    maxLines: 33,
    minLines: 28,
    autoScrollEditorIntoView: true,
    keyboardHandler: null,
})
editor.resize()

var myCode = editor.getSession().getValue();


function saveStaticDataToFile() {
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.php");
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
