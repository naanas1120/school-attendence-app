import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBUsHb3cxtodvO-ePhiQylqWmu9dl25K18",
    authDomain: "school-attendence-app-5c042.firebaseapp.com",
    databaseURL: "https://school-attendence-app-5c042-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-5c042",
    storageBucket: "school-attendence-app-5c042.appspot.com",
    messagingSenderId: "726685805710",
    appId: "1:726685805710:web:253f5d141e6a03e2ea6ddf"
  };
  // Initialize Firebase
  let app=firebase.initializeApp(firebaseConfig);
  export default app.database()