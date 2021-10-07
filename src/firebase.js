// Import the functions you need from the SDKs you need

import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRW46ZLfrYj2NpDqukZl7vwjJNw1UPhn0",
    authDomain: "d2ymovies.firebaseapp.com",
    projectId: "d2ymovies",
    storageBucket: "d2ymovies.appspot.com",
    messagingSenderId: "715389289446",
    appId: "1:715389289446:web:8f39d16dcc8e28913f8c27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;