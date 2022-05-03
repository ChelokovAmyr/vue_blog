import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBHOyDNZKR7ChxBa8B_8CxARiSnuWC4zx8",
    authDomain: "vuefireblog-d58e5.firebaseapp.com",
    projectId: "vuefireblog-d58e5",
    storageBucket: "vuefireblog-d58e5.appspot.com",
    messagingSenderId: "213502731000",
    appId: "1:213502731000:web:f20005fd382795aa71d10d",
    measurementId: "G-EL46P4DDQQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {timestamp}
  export default firebaseApp.firestore()

