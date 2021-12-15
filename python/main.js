var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.resize()

function runit(){
    code = editor.getSession().getValue()
    $.post("http://localhost:8000/input",{code: code});
    output = $.get("http://localhost:8000/output")
    console.log("output")
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
