var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.resize()

var select_language = document.getElementById('language');
function change_language() {
if (select_language.options[select_language.selectedIndex].value == "Python") {
    editor.session.setMode("ace/mode/python");
}
if  (select_language.options[select_language.selectedIndex].value == "Javacript") {
    editor.session.setMode("ace/mode/javascript");
}
}

var myCode = editor.getSession().getValue();
function saveStaticDataToFile() {
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.rb");
}