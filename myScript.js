function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  document.getElementById("demo1").innerHTML = "A kind of magic...";
  document.getElementById("demo2").innerHTML = "Really? Serioulsy...";
}
function myFunction2() {
  document.getElementById("2demo").innerHTML = "6";
}
function myFunction3() {
  document.getElementById("3demo").innerHTML = "4";
}
function myFunction4() {
  document.getElementById("4demo").innerHTML = "24";
}
function myFunction5() {
  document.getElementById("5demo").innerHTML = "12";
}
function isKeyPressed(event) {
  const x = document.getElementById("demo");
  if (event.ctrlKey) {
    x.innerHTML = "The CTRL key was pressed!";
  } else {
    x.innerHTML = "The CTRL key was NOT pressed!";
  }
}