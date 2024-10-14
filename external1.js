function myFunction() {
  document.getElementById("demo1").innerHTML = "I have to change.";
  document.getElementById("demo2").innerHTML = "I have to change.";
  document.getElementById("demo3").innerHTML = "I have to change.";
  document.getElementById("demo4").innerHTML = "I have to change.";
}
// Create an Object:
person = {
  firstName: "John",
  lastName: "Dee",
  age: 46,
  eyeColor: "blue",
  cars: {
    brand : "Daccia",
    model : "Sandero",
    state : "customized"
  }
};

const d = new Date();
function date() {
  document.getElementById("domo").innerHTML = d;
}

function eo() {
  // Display Data from the Object:
document.getElementById("demo").innerHTML =
person.firstName + person.lastName + " is " + person.age + " years old, with " + person.eyeColor +" eyes.";
}
function neo() {
  // Display Data from the Object:
document.getElementById("dem").innerHTML =
"My car is a " + person.cars.brand + " " + person.cars.model + " and is "+ person.cars.state + ".";
}
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}
const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}