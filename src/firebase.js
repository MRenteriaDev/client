import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNMC3at8aOE2Onrau1PoqaFVlUMunc6bw",
  authDomain: "ecommerce-c60a7.firebaseapp.com",
  databaseURL: "https://ecommerce-c60a7.firebaseio.com",
  projectId: "ecommerce-c60a7",
  storageBucket: "ecommerce-c60a7.appspot.com",
  messagingSenderId: "69159906934",
  appId: "1:69159906934:web:f5b9e34525dd03c7e5f957",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
