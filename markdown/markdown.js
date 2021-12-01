var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/markdown");
editor.resize()

var myCode = editor.getSession().getValue();
function saveStaticDataToFile() {
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.md");
}

var myCode = editor.getSession().getValue();
document.getElementById('markdown-content').innerHTML = marked.parse(myCode);

