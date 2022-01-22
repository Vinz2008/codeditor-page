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
const db = firebase.firestore()
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

async function isUserAlreadyExisting(user) {
  resultFunc = await db
	.collection('users')
	.where("uid", "==", user.uid)
	.get()
  .then((querySnapshot) => {
    i = 0
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        i++
      });
    if (i < 1) {
      console.log("null")
    }
    console.log("i:" + i)
});
    console.log(resultFunc)
    console.log("out of the loop i:" + i)
    /*if (i != 0) {
      console.log("returned true")
    return true;
    }
    else {
      console.log("returned false")
      return false;

    }*/
  return i;
  }


auth.onAuthStateChanged(user => {
  if (user) {
    /*result = await db
	.collection('users')
	.where("uid", "==", user.uid)
	.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        i++
      });
    if (i <= 1) {
      console.log("null")
    }
    console.log("i:" + i)
});
    console.log(result)
    console.log("out of the loop i:" + i)*/
    //if (i < 1) {
      isUserAlreadyExisting(user).then(i => {console.log("i:" + i)//})
      if (i < 1) {
    userRef = db.collection('users');
    userRef.add({
      uid: user.uid,
      name: user.displayName,
      python_code: ""
    });
    console.log("user added")
  }
})
  }
});
