alert("Welcome to the game! You need to find three items to help you in your journey. One will take you further on. Good luck! 🤩")

var pillow = document.getElementById('pillow');
var glasses = document.getElementById('glasses');

if (localStorage.glasses !== undefined){
  glasses.style.display = localStorage.glasses;
  pillow.style.display = localStorage.pillow;
}

pillow.addEventListener("click", function(){
    pillow.style.display = "block"
    glasses.style.display = "block"
    localStorage.glasses = "none"
    localStorage.pillow = "block"
})

var mug = document.getElementById('mug');

mug.addEventListener("click", function(){
    mug.style.display = "block"
    driver.style.display = "block"
})

var driver = document.getElementById('driver');
var key = document.getElementById('mug');

driver.addEventListener("click", function(){
  driver.style.display = "block"
  key.style.display = "block"
})

var note = document.getElementById('note');
var lovenote = document.getElementById('lovenote');

if (localStorage.lovenote !== undefined){
  lovenote.style.display = localStorage.lovenote;
  note.style.display = localStorage.note;
}

note.addEventListener("click", function(){
    note.style.display = "block"
    lovenote.style.display = "block"
    localStorage.lovenote = "none"
    localStorage.note = "block"
})
