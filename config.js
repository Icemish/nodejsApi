const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBqmtsey7x6DDt2kkGdVQvl_P8d_RNWc2c",
  authDomain: "crmnodejs.firebaseapp.com",
  projectId: "crmnodejs",
  storageBucket: "crmnodejs.appspot.com",
  messagingSenderId: "77505919075",
  appId: "1:77505919075:web:f2923ae59e0efa467ea056"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = db