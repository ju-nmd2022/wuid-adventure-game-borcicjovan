let num = Math.random();

let button = document.getElementById("flip");
let result = document.getElementById("result");

function fnClick(event) {
  let num = Math.random();

  if (num < 0.5) {
    result.innerHTML = win.style.display = "block"
    alert("You have won, congratulations! 🥳")
  } else if (num > 0.5 && num< 0.75 ){
    alert("try again")
  } else {
    result.innerHTML = lose.style.display = "block"
    alert("Oh sorry, not today! 😔")
  }
}
button.addEventListener("click", fnClick);

// This was made with help of my classmate Tess, origianlly adapted and taken from https://sebhastian.com/coin-flip-javascript/  