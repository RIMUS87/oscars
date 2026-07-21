// 1. Paste the config you got from Firebase here
const firebaseConfig = {
    apiKey: "AIzaSyDlk4CBrr03whfJry3hcf6VUACkNfwT71Y",
    authDomain: "user-login-c7af2.firebaseapp.com",
    projectId: "user-login-c7af2"
};

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
