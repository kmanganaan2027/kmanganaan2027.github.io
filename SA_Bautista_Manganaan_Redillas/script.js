var u = 0;

function jump(){
  document.getElementById("player").style.top = "300px";
  setTimeout(gravity, 300);
}

function gravity(){
  document.getElementById("player").style.top = "400px";
}

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

function point(){
  u++;
  document.getElementById("point").innerHTML = "Bonuses Gotten in One Run: " + u;
}

let alive = setInterval(function(){
  let chartop = parseInt(window.getComputedStyle(document.getElementById("player")).getPropertyValue("top"));
  let obr = parseInt(window.getComputedStyle(document.getElementById("o1")).getPropertyValue("right"));
  let unos = parseInt(window.getComputedStyle(document.getElementById("uno")).getPropertyValue("right"));
  let audio = new Audio("fail.mp3");

  if(obr < 570 && obr > 540 && chartop >= 390){
    audio.play();
    alert("Game Over !!");
    document.getElementById("point").innerHTML = "Bonuses Gotten in One Run: 0";
    u = 0;
  }
  if(unos >= 510 && chartop == 300){
    point();
  }
}, 10)