import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA99EegCDe91OJDb8R5Mahs1T1RNH02j6U",
  authDomain: "mydisney-plus-clone.firebaseapp.com",
  projectId: "mydisney-plus-clone",
  storageBucket: "mydisney-plus-clone.appspot.com",
  messagingSenderId: "855139991071",
  appId: "1:855139991071:web:4c79c6b99a69150f519f2a",
  measurementId: "G-TXZ03KNDPR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
