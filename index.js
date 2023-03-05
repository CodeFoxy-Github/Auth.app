
let params = curl.searchParams;
params.get('gmbld'); // "react"
const curl = new URL(window.location.href);
const urlHost = curl.host;  // "example.com"
const firebaseConfig = {
    apiKey: "AIzaSyBiAZtrKRQSqkBnh6iuvNgl18ANPuUTWGo",
    authDomain: "login-database-9e4b0.firebaseapp.com",
    projectId: "login-database-9e4b0",
    storageBucket: "login-database-9e4b0.appspot.com",
    messagingSenderId: "1068869322549",
    appId: "1:1068869322549:web:3309e2ae00fcfc21f22e7c",
    databaseURL: "https://login-database-9e4b0.asia-east1.firebasedatabase.app/",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  
function loginurl() {
    location.href = 'index.html';
}
function Signup() {
    const psw = document.getElementById('password').value;
    const eml = document.getElementById('Email').value;
    const check = document.getElementById('password-check').value;
    if (psw == check) {
        
db.collection("account").add({
    email: eml,
    passw: psw
})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        location.href = 'emailchk';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        location.href = 'err';
        
    });
   } else {
       document.getElementById("Message").style.color = "Red";
       document.getElementById("Message").innerHTML = "Passwords do NOT match!"
    }
}
function sent(em21ail) {
  const url = 'https://send.api.mailtrap.io/api/send';
const headers = {
  'Authorization': 'Bearer 02430b19e4558410c2f608d82ee4cab6',
  'Content-Type': 'application/json'
};
const data = {
  from: { email: 'mailtrap@codefoxy.cf', name: 'Mailtrap Test' },
  to: [ { email: 'codefoxy@codefoxy.cf' } ],
  subject: 'You are awesome!',
  html: '<html><body><h1>Congrats for sending test email with Mailtrap!</h1></body></html>',
  category: 'Integration Test'
};
const options = {
  method: 'POST',
  headers,
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

};