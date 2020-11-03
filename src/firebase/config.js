import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyC_q9JKIKu0XgmDzwYS4ckoonFcsTm_Cag",
    authDomain: "mein-plan-2271.firebaseapp.com",
    databaseURL: "https://mein-plan-2271.firebaseio.com",
    projectId: "mein-plan-2271",
    storageBucket: "mein-plan-2271.appspot.com",
    messagingSenderId: "883915123311",
    appId: "1:883915123311:web:4b5c1a54ef9efb3206fb9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshot:true})


  export default firebase;
