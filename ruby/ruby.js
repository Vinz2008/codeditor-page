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
  output = document.getElementById("output");

  transpiled = Opal.compile(editor.getSession().getValue());
  document.getElementById("transpiled").innerHTML = Opal.compile(editor.getSession().getValue());
  /*output.innerHTML = eval(transpiled);*/
  document.getElementById("output").innerHTML = eval(transpiled)
}


