import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadDB() {
  try {
    var config = {
        apiKey: "AIzaSyCyuUFCZI7gR4FsL7B46b1JvQ0ZoxAmTnM",
        authDomain: "blog-85d67.firebaseapp.com",
        databaseURL: "https://blog-85d67.firebaseio.com",
        projectId: "blog-85d67",
        storageBucket: "blog-85d67.appspot.com",
        messagingSenderId: "360962377301",
        appId: "1:360962377301:web:e3a3a57601a61ca77db6dc",
        measurementId: "G-1HQDCGTZ5D"
      };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}
