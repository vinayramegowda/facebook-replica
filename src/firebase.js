import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCZThPaChwFIAcEqIxZLEGNSHCkiVBfoFY",
	authDomain: "facebook-replica-45501.firebaseapp.com",
	databaseURL: "https://facebook-replica-45501.firebaseio.com",
	projectId: "facebook-replica-45501",
	storageBucket: "facebook-replica-45501.appspot.com",
	messagingSenderId: "700540204635",
	appId: "1:700540204635:web:421fa787f0ba3982f3717e",
	measurementId: "G-KTHT5JMJYB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
