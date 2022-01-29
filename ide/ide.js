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

async function runit(){
    output_div = document.getElementById("output")
    output_div.innerHTML = "Loading..."
    var code = editor.getSession().getValue()
    /*$.post("https://python-interpreter1.herokuapp.com/input",{code: code} ,function(result) {
        console.log(result)

    });*/
    console.log("code: " + code)
    output = run(code)
    setTimeout(function(){
    console.log("output: " + output)
    output_div.innerHTML = output
    },4000);
}

var buttonTheme = document.getElementById('btn-toggle')
setThemeAce()

buttonTheme.addEventListener("click", function() {
    setThemeAce();

});

//editor.setTheme("ace/theme/dracula");
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

var runButton = document.getElementById("runButton")
var select_runtime = document.getElementById("runtime")
function change_runtime() {
    if (select_runtime.options[select_runtime.selectedIndex].value == "python") {
        runButton.style.visibility = 'visible';
    }
    if (select_runtime.options[select_runtime.selectedIndex].value == "none") {
        runButton.style.visibility = 'hidden';  
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

if(buttonTheme.clicked == true) {
    setThemeAce()

}