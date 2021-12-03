var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.resize()

var myCode = editor.getSession().getValue();
 function saveStaticDataToFile() {
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.rb");
 }
function compile() {
  const input = document.getElementById("input");
  const transpiled = document.getElementById("transpiled");
  const output = document.getElementById("output");

  transpiled.value = Opal.compile(input.value);
  output.value = eval(transpiled.value);
}

document.onload = function() { compile(); }
