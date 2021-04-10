import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDKCVW0K0UN3eim10ospdSnv21JZWhGt5c",
    authDomain: "clone-25e3a.firebaseapp.com",
    projectId: "clone-25e3a",
    storageBucket: "clone-25e3a.appspot.com",
    messagingSenderId: "724941000033",
    appId: "1:724941000033:web:8eda97339b1c87c2f24920"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }