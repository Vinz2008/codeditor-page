var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.setOptions({
    maxLines: 33,
    minLines: 28,
    autoScrollEditorIntoView: true,
    keyboardHandler: null,
})
editor.resize()

var parameters_div = document.getElementById("parameters_div");

var select_language = document.getElementById('language');
function change_language() {
if (select_language.options[select_language.selectedIndex].value == "Python") {
    //editor.session.setMode("ace/mode/python");
    editor.setOptions({
        mode: "ace/mode/python",
    });
    console.log("Python")
}
if  (select_language.options[select_language.selectedIndex].value == "Javascript") {
    editor.setOptions({
        mode: "ace/mode/javascript",
    });
    //editor.session.setMode("ace/mode/javascript");
    console.log("JS")
}
}

var select_vim_mode = document.getElementById("vim-mode");
function change_vim_mode() {
    if (select_vim_mode.options[select_vim_mode.selectedIndex].value == "Y" ) {
        editor.setOptions({
            keyboardHandler: "ace/keyboard/vim",
        });
    }
    if (select_vim_mode.options[select_vim_mode.selectedIndex].value == "N" ) {
        editor.setOptions({
            keyboardHandler: null,
        });
    }
}

var parameters_button = document.getElementById("parameters_div")
function showParameters() {
    parameters_button.style.visibility = 'visible';

}

function hidParameters() {
    parameters_button.style.visibility = 'hidden';
}
var extension = "py"
var select_file_type = document.getElementById("file_type");
function change_file_type() {
    if (select_file_type.options[select_file_type.selectedIndex].value == "Python" ) {
       extension = "py"
       
    }
    if (select_file_type.options[select_file_type.selectedIndex].value == "JS" ) {
        extension = "js"
    }
    console.log(extension)

}



var myCode = editor.getSession().getValue();
function saveStaticDataToFile() {
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, `code.${extension}`);
}