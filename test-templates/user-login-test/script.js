// Your Firebase config object (replace with your own from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBrKSaKZ9eP1RJ9neHC8CFf6qjSCB_9Q-4",
  authDomain: "test2-5a459.firebaseapp.com",
  projectId: "test2-5a459",
  storageBucket: "test2-5a459.firebasestorage.app",
  messagingSenderId: "842448219074",
  appId: "1:842448219074:web:24763cfa6b2d3a073a045b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      message.textContent = "Login successful!";
      message.style.color = "lightgreen";
    })
    .catch(error => {
      message.textContent = "Error: " + error.message;
      message.style.color = "red";
    });
});