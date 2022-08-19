import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCI3q1XqNEtNjbIui5udrZTmlkckbxrm08",
  authDomain: "instagram-clone-react-ae2b2.firebaseapp.com",
  projectId: "instagram-clone-react-ae2b2",
  storageBucket: "instagram-clone-react-ae2b2.appspot.com",
  messagingSenderId: "840016036404",
  appId: "1:840016036404:web:883e817d8ec0b8a7ea0061",
  measurementId: "G-MVLPD6N0MH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
