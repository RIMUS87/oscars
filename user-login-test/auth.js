import { initializeApp } from "https://www.gstatic.com";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://gstatic.com";

// YOUR CONFIG OBJECT HERE
const firebaseConfig = { 
    apiKey: "AIzaSyBrKSaKZ9eP1RJ9neHC8CFf6qjSCB_9Q-4",
    authDomain: "test2-5a459.firebaseapp.com",
    projectId: "test2-5a459",
    storageBucket: "test2-5a459.firebasestorage.app",
    messagingSenderId: "842448219074",
    appId: "1:842448219074:web:24763cfa6b2d3a073a045b" 
};

const auth = getAuth(initializeApp(firebaseConfig));

// --- SIGN UP LOGIC ---
document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert('Account created!'))
        .catch((error) => alert(error.message));
});

// --- LOGIN LOGIC ---
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => alert('Logged in!'))
        .catch((error) => alert(error.message));
});
