//  3-22 was taken from https://jsfiddle.net/sf5t8bw1/1/

var form = document.getElementById("form"),
text = document.getElementById("text"),
save = document.getElementById("save"),
get = document.getElementById("get");

form.onsubmit = function () {
return false;
}

save.onclick = function () {
alert("Setting: " + text.value);
window.localStorage.setItem("myvalue", text.value);
text.value = ""; 
}

get.onclick = function () {
var txt = window.localStorage.getItem("myvalue");
text.value = txt;
alert("Getting: " + txt);
}