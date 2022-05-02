import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmk5DnBjYmh7xR7cehEWFQyCU_CoOfImI",
    authDomain: "vuefirebaseapp-8dd90.firebaseapp.com",
    projectId: "vuefirebaseapp-8dd90",
    storageBucket: "vuefirebaseapp-8dd90.appspot.com",
    messagingSenderId: "614065853259",
    appId: "1:614065853259:web:13dea3c1671ae71eb50ece",
    measurementId: "G-L8ZZ1YC703"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {timestamp}
  export default firebaseApp.firestore()

  