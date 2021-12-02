var editor = ace.edit("mycode");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.resize()

function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runit() { 
    var prog = document.getElementById("mycode").value; 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = ''; 
    Sk.pre = "output";
    Sk.configure({output:outf, read:builtinRead}); 
    (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
        console.log('success');
    },
        function(err) {
        console.log(err.toString());
    });
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