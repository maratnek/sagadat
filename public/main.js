// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBaw_1ERFqHE3r5sN_Ycva0gFCDcZnCAHs",
//   authDomain: "sagadat-family.firebaseapp.com",
//   databaseURL: "https://sagadat-family.firebaseio.com",
//   projectId: "sagadat-family",
//   storageBucket: "sagadat-family.appspot.com",
//   messagingSenderId: "685603264127"
// };
//
// firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {

  e.preventDefault();
  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var tel = getInputVal('tel');
  var age = getInputVal('age');
  var message = getInputVal('message');
  var male = (new FormData(document.querySelector("form"))).get('male');

  saveMessage(name, male, age, email, tel, message);
  // console.log(name, email, tel, age, message,male);
  //Show Alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3s
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(name, male, age, email, tel, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    male: male,
    age: age,
    email: email,
    tel: tel,
    message: message
  })

}
