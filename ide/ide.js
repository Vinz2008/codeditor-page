var cloudIdeCode
var select_language = document.getElementById('language');
var firebaseConfig = {
    apiKey: "AIzaSyDBL3upiS5cgx8Q33FTYaBQivGowZ_u_o4",
    authDomain: "codeditor-8afc9.firebaseapp.com",
    projectId: "codeditor-8afc9",
    storageBucket: "codeditor-8afc9.appspot.com",
    messagingSenderId: "1063669641173",
    appId: "1:1063669641173:web:9b140279152faf33f7d75c",
  };
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  var userId = localStorage.getItem("userId")
  if (userId != null) {
  getCode()
  }
  var runButton = document.getElementById("runButton")
  if (userId != null) {
    IsUserLoggedIn = true
    getCode()
    console.log(`${userId} logged in`)
    cloudIdeCode = localStorage.getItem("cloudCode")
    console.log(cloudIdeCode)
    document.getElementById('mycode').innerHTML = cloudIdeCode
    
    
} else {
    console.log("user not logged in")
    IsUserLoggedIn = false
    if (select_language.options[select_language.selectedIndex].value == "Python") {
        document.getElementById('mycode').innerHTML = "print('hello')"
    }
    if  (select_language.options[select_language.selectedIndex].value == "Javascript") {
        document.getElementById('mycode').innerHTML = "console.log('hello');"
    }

}

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

async function runitPython(){
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

function runitMarkdown() {
    var myCode = editor.getSession().getValue();
document.getElementById('output').innerHTML = marked.parse(myCode);
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

var docName;
async function sync() {
    myCode = editor.getSession().getValue();
    console.log(`My code syncing: ${myCode}`)
    console.log(`userId: ${userId}`)

    yourDoc = await db.collection('users')
    .where("uid", "==", userId)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            docName = doc.id
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        })
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    console.log(`docName: ${docName}`);
    
    
    return db.collection('users').doc(docName).update({
        ide_code: myCode
    })
}

async function getCode() {
    yourDoc = await db.collection('users')
    .where("uid", "==", userId)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            docData = doc.data();
            console.log(docData.python_code)
            cloudIdeCode = docData.ide_code
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        })
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    localStorage.setItem("cloudCode", cloudIdeCode)
    return cloudIdeCode

}

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
if (select_language.options[select_language.selectedIndex].value == "Markdown") {
    //editor.session.setMode("ace/mode/python");
    editor.setOptions({
        mode: "ace/mode/markdown",
    });
    console.log("Markdown")
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
var runtime = "none"
var runButton = document.getElementById("runButton")
var select_runtime = document.getElementById("runtime")
runButton.addEventListener("click", function() {
    if (runtime == "python") {
        runitPython();
    }
    if (runtime == "markdown") {
        runitMarkdown()
    }
    

});
var select_runtime = document.getElementById("runtime")
function change_runtime() {
    if (select_runtime.options[select_runtime.selectedIndex].value == "python") {
        runButton.style.visibility = 'visible';
        runtime = "python" 
    }
    if (select_runtime.options[select_runtime.selectedIndex].value == "none") {
        runButton.style.visibility = 'hidden';  
        runtime = "none" 
    }
    if (select_runtime.options[select_runtime.selectedIndex].value == "markdown") {
        runButton.style.visibility = 'visible'; 
        runtime = "markdown" 
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
    if (select_file_type.options[select_file_type.selectedIndex].value == "Markdown" ) {
        extension = "md"
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

editor.session.on('change', async function(delta) {
    console.log(editor.getSession().getValue())
    console.log("IsUserLoggedIn " + IsUserLoggedIn)
    if(IsUserLoggedIn == true) {
        await sync()
    }
     });
    

document.addEventListener('keydown', e => {
if (e.ctrlKey && e.key === 's') {
// Prevent the Save dialog to open
e.preventDefault();
// Place your code here
console.log('CTRL + S');
saveStaticDataToFile();
}
});