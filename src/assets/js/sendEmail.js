function sendEmail() {
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var name = document.getElementById("sender").value;
var text = document.getElementById("message").value;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "test@gmail.com",
  "subject": "are you open to new offers now?",
  "name": "some company",
  "text": "Hi Mrs Safaie, ....."
});

console.log(raw);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://mymailservice.herokuapp.com/sendEmail", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

return false;
}