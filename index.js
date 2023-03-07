
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
        location.href = `emailchk.html?email=${eml}`;
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
  const verificationCode = Math.floor(100000 + Math.random() * 900000); // generate 6-digit verification code

  const url = 'https://send.api.mailtrap.io/api/send';
const headers = {
  'Authorization': 'Bearer 02430b19e4558410c2f608d82ee4cab6',
  'Content-Type': 'application/json'
};
const cdf = (`<html><body><br><h2>Your verification code is :</h2><h2>${verificationCode}</body></html>`);
const data = {
  from: { email: 'support@codefoxy.cf', name: '' },
  to: [ { email: em21ail } ],
  subject: 'Please verify your account',
  category: 'Verification Email',
  html: cdf
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





function Signup() {
  const adute = document.getElementById('parent').value;
  const name = document.getElementById('name').value;
  var e = document.getElementById("yxr1");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;  
  console.log(text);
  console.log(value);
  const kid2 = document.getElementById('kid2').value;
  const check = document.getElementById('password-check').value;
      
db.collection("join").add({
  陪同家長姓名: adute,
  兒童姓名: name,
  兒童姓名2: kid2,
  年級: 
})
  .then(function(docRef) {
    
      console.log("Document written with ID: ", docRef.id);
      location.href = `emailchk.html?email=${eml}`;
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
      location.href = 'err';
      
  });
}