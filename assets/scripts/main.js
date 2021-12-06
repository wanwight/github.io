var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'assets/images/img-fire.png') {
      myImage.setAttribute ('src','assets/images/img-alt.png');
    } else {
      myImage.setAttribute ('src','assets/images/img-fire.png');
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function SetUserName() {
  var myName = prompt('Please, enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'WELCOME, ' + myName;
}

if (!localStorage.getItem('name')) {
 SetUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'WELCOME, ' + storedName;
}

myButton.onclick = function() {
  SetUserName();
}