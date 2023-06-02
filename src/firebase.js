import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDI_joJ6Jvi5K_tW84oYTK7grBc4jvEtxk",
  authDomain: "instagram-clone-react-18e2e.firebaseapp.com",
  projectId: "instagram-clone-react-18e2e",
  storageBucket: "instagram-clone-react-18e2e.appspot.com",
  messagingSenderId: "688160375128",
  appId: "1:688160375128:web:1b54dd675de65ac29de52d",
  measurementId: "G-CFECHZ3X0T",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;
