var firebaseConfig = {
    apiKey: "AIzaSyDBL3upiS5cgx8Q33FTYaBQivGowZ_u_o4",
    authDomain: "codeditor-8afc9.firebaseapp.com",
    projectId: "codeditor-8afc9",
    storageBucket: "codeditor-8afc9.appspot.com",
    messagingSenderId: "1063669641173",
    appId: "1:1063669641173:web:9b140279152faf33f7d75c",
  };

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const database = firebase.firestore()
var provider = new firebase.auth.GoogleAuthProvider();

function create_account() {
firebase.auth()
  .signInWithRedirect(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken; // for google api
    var user = result.user;
    console.log(user);
    informations_div = document.getElementById('Informations')
    informations_div.innerHTML = ""
    informations_div.innerHTML = `name: ${user}`
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        
    });
}

