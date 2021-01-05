// jump.js
var slct = document.getElementById("selectURL");
var inputList = document.getElementsByTagName("input");
var txt = inputList[0];
var button = inputList[1];

slct.onchange = function() {
    txt.value = slct.value;
}

button.onclick = function() {
    location = slct.value;
}