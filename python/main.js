var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.resize()

function runit(){
    code = editor.getSession().getValue()
    document.getElementById("pythonscript").innerHTML = code
    output = brython()
    console.stdlog = console.log.bind(console);
    console.logs = [];
    console.log = function(){
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}
    document.getElementById("output").innerHTML = console.logs
    console.log(brython())
    console.logs.length = 0;
    
    

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