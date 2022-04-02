var cloudPythonCode
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
getCode()
if (userId != null) {
    getCode()
    console.log(`${userId} logged in`)
    cloudPythonCode = localStorage.getItem("cloudCode")
    console.log(cloudPythonCode)
    document.getElementById('mycode').innerHTML = cloudPythonCode
    
    
} else {
    console.log("user not logged in")
    document.getElementById('mycode').innerHTML = "print('hello')"
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

var buttonTheme = document.getElementById('btn-toggle')
setThemeAce()

buttonTheme.addEventListener("click", function() {
    setThemeAce();

});
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
        python_code: myCode
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
            cloudPythonCode = docData.python_code
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        })
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    localStorage.setItem("cloudCode", cloudPythonCode)
    return cloudPythonCode

}

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
    if (output == undefined) {
        console.log("There was an error. Retry")
        ouput = "There was an error. Retry"
    }
    output_div.innerHTML = output
    },700);
}
/*
var output
async function main() {
    let pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.19.0/full/",
    });;
    return pyodide;
}
let pyodideReadyPromise = main();

async function runit(){
    output_div = document.getElementById("output")
    output_div.innerHTML = "Loading..."
    var code = editor.getSession().getValue()
    console.log("code: " + code)
    let pyodide = await pyodideReadyPromise;
    console.log(pyodide.runPython(code))

        try {
            output = await pyodide.runPython(code);
        } catch (err) {
          console.error(err);
        }
    console.log("output: " + output)
    output_div.innerHTML = output

}
*/

 var myCode = editor.getSession().getValue();
 function saveStaticDataToFile() {
    myCode = editor.getSession().getValue();
    var blob = new Blob([myCode],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.py");
 }
 editor.session.on('change', async function(delta) {
console.log(editor.getSession().getValue())
await sync()
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
