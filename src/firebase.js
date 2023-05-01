import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyA0wb5OUmdnXzT2H7FgFWdmvBhubL0qteU",
    authDomain: "baldres-57d81.firebaseapp.com",
    projectId: "baldres-57d81",
    storageBucket: "baldres-57d81.appspot.com",
    messagingSenderId: "493730875500",
    appId: "1:493730875500:web:ed98e188955d26bdd67049"
  };
  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();