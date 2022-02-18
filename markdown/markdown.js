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

editor.session.setMode("ace/mode/markdown");
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
    saveAs(blob, "test.md");
}

var myCode = editor.getSession().getValue();
document.getElementById('output').innerHTML = marked.parse(myCode);

editor.session.on('change', function(delta) {
    var myCode = editor.getSession().getValue();
document.getElementById('output').innerHTML = marked.parse(myCode);

});
