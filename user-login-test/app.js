// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlk4CBrr03whfJry3hcf6VUACkNfwT71Y",
  authDomain: "user-login-c7af2.firebaseapp.com",
  projectId: "user-login-c7af2",
  storageBucket: "user-login-c7af2.firebasestorage.app",
  messagingSenderId: "623711768712",
  appId: "1:623711768712:web:fbec009412ce81de3e8f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Initialize Firebase (Do not change this part)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 3. Login Function
function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful! Welcome.");
            // Redirect to a members-only page if desired
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
// Append this function to your existing app.js file

function registerUser() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simple validation check
    if (!email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Firebase built-in function to create new users
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account created successfully! Redirecting to login...");
            window.location.href = "index.html"; // Sends user back to login page
        })
        .catch((error) => {
            alert("Registration Error: " + error.message);
        });
}
