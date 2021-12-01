var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/markdown");
editor.resize()

var myCode = editor.getSession().getValue();
document.getElementById('markdown-content').innerHTML = marked.parse(myCode);