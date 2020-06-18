import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBCtcMGAk4EaAjHVDJBNptPw3Ufk5aTfEY",
  authDomain: "marioplan-project-with-react.firebaseapp.com",
  databaseURL: "https://marioplan-project-with-react.firebaseio.com",
  projectId: "marioplan-project-with-react",
  storageBucket: "marioplan-project-with-react.appspot.com",
  messagingSenderId: "355512342324",
  appId: "1:355512342324:web:ea60ea6af2d3fcb7c1f761",
  measurementId: "G-EQY2QMKNGD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase