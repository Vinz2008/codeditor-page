var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.resize()

function runit(){
    var code = editor.getSession().getValue()
    /*$.post("https://python-interpreter1.herokuapp.com/input",{code: code} ,function(result) {
        console.log(result)

    });*/
    console.log(run())
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
