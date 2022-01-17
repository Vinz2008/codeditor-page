const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut')
const signInBtn = document.getElementById('signInBtn')
const signOutBtn = document.getElementById('signOutBtn')
const userDetails = document.getElementById('userDetails')

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
const provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
auth.signInWithPopup(provider);
}

function signOut() {
auth.signOut();
}

auth.onAuthStateChanged(user => {
  if (user) {
      // signed in
      whenSignedIn.hidden = false;
      whenSignedOut.hidden = true;
      userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
      // not signed in
      whenSignedIn.hidden = true;
      whenSignedOut.hidden = false;
      userDetails.innerHTML = '';
  }
});