import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCFHB52jeIx_YqTMm9CqHLXdbr5CYBTIA",
  authDomain: "spectrum-c0691.firebaseapp.com",
  projectId: "spectrum-c0691",
  storageBucket: "spectrum-c0691.appspot.com",
  messagingSenderId: "197065999879",
  appId: "1:197065999879:web:09747bf61405ae11e80ca2",
  measurementId: "G-05WKRLB4SG"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 