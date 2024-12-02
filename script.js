let maker = document.querySelector(".counter_c");
let beans = document.querySelector(".counter_b");
let money = document.querySelector(".counter_m");
let mSound = document.getElementById("money-sound");
let bSound = document.getElementById("beans-sound");
let pSound = document.getElementById("pour-sound");
let dohSound = document.getElementById("doh-sound");

function incrementMaker() {
  if (beans.innerHTML >= 8) {
    maker.innerHTML = parseFloat(maker.innerHTML) + 1;
    beans.innerHTML = parseFloat(beans.innerHTML) - 8;
    SoundPour();
  } else {
    dohSound.innerHTML = dohSound.play();
  }
}

function incrementBeans() {
  if (money.innerHTML >= 2) {
    beans.innerHTML = parseFloat(beans.innerHTML) + 25;
    money.innerHTML = parseFloat(money.innerHTML) - 2;
    SoundBeans();
  } 
  else {
    dohSound.innerHTML = dohSound.play();
  }
}
function incrementMoney() {
  if (maker.innerHTML >= 1) {
    money.innerHTML = parseFloat(money.innerHTML) + 2;
    maker.innerHTML = parseFloat(maker.innerHTML) - 1;
    SoundMoney();
  } else {
    dohSound.innerHTML = dohSound.play();
  }
}
function SoundMoney() {
  mSound.innerHTML = mSound.play();
}
function SoundBeans() {
  bSound.innerHTML = bSound.play();
}
function SoundPour() {
  pSound.innerHTML = pSound.play();
}
