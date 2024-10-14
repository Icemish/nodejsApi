const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBLn7pREcWUjB1FK2uiD95spsrEzd5Ul4M",
  authDomain: "pruebanodeapi.firebaseapp.com",
  projectId: "pruebanodeapi",
  storageBucket: "pruebanodeapi.appspot.com",
  messagingSenderId: "404995617974",
  appId: "1:404995617974:web:2dac25a52e851dd42b2217"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = db
