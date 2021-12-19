function _DOMExample() {
  document.getElementById("root").innerHTML =
    "Hello I am coming from inner html";
  document.getElementById("url").innerHTML = document.URL;
}

function changeURL() {
  let currentURL = document.URL;
  window.location = "¯_(ツ)_/¯";
}

function _getElementById() {
  const element = document.getElementById("root");
  document.getElementById("url").innerHTML =
    element.innerHTML + " Change from getElementById";
}

function _getElementsByTagName() {
  const element = document.getElementsByTagName("p");
  console.log(element);
  console.log(element[0]);
  console.log(element[0].innerHTML);
}

function _getElementsByClassName(){
  const element = document.getElementsByClassName('intro')
  console.log(element);
}

function myMessage(){
  alert("This message was triggered onload functionality")
}
function changeText(id) {
  id.innerHTML = "onClick functionality is called";
}
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}