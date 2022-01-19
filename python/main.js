var theme = localStorage.getItem("theme");
function setThemeAce() {
    var theme = localStorage.getItem("theme");
    if (theme == "light") {
        editor.setTheme("ace/theme/github");
    } else if (theme == "dark") {
        editor.setTheme("ace/theme/dracula");
    }
}
var editor = ace.edit("mycode");
editor.setTheme("ace/theme/github");

var buttonTheme = document.getElementById('btn-toggle')
setThemeAce()

buttonTheme.addEventListener("click", function() {
    setThemeAce();

});
editor.session.setMode("ace/mode/python");
editor.setOptions({
    maxLines: 33,
    minLines: 28,
    autoScrollEditorIntoView: true,
    keyboardHandler: null,
})
editor.resize()

function runit(){
    var code = editor.getSession().getValue()
    /*$.post("https://python-interpreter1.herokuapp.com/input",{code: code} ,function(result) {
        console.log(result)

    });*/
    console.log("code: " + code)
    output = run(code)
    console.log("output: " + output)
    output_div = document.getElementById("output")
    output_div.innerHTML = output
}

 var myCode = editor.getSession().getValue();
 function saveStaticDataToFile() {
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.py");
 }
 
 editor.session.on('change', function(delta) {
console.log(editor.getSession().getValue())
 });
