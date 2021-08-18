import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp ({
  apiKey: "AIzaSyChPem3RJhb13x8S4kMEo-C77WziAa1-hs",
  authDomain: "todoist-d2bd0.firebaseapp.com",
  databaseURL: "https://todoist-d2bd0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoist-d2bd0",
  storageBucket: "todoist-d2bd0.appspot.com",
  messagingSenderId: "529234894995",
  appId: "1:529234894995:web:f5fc0fa26345c733e12d66"
});

export { firebaseConfig as firebase };