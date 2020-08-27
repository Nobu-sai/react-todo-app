import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyDoVG_LDuXtXzIkCeW7GZO_3l2udUpCuec",
    authDomain: "todo-app-ce75f.firebaseapp.com",
    databaseURL: "https://todo-app-ce75f.firebaseio.com",
    projectId: "todo-app-ce75f",
    storageBucket: "todo-app-ce75f.appspot.com",
    messagingSenderId: "199740443612",
    appId: "1:199740443612:web:12dd486e1dae07d98edd19"
  });

  const db = firebaseApp.firestore();

  export default db;