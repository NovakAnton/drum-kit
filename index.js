document.querySelector(".w-tom1").addEventListener("click", function () {
  let sound = new Audio("./sounds/tom-1.mp3");
  sound.play();
});

document.querySelector(".a-tom2").addEventListener("click", function () {
  let sound = new Audio("./sounds/tom-2.mp3");
  sound.play();
});

document.querySelector(".s-tom3").addEventListener("click", function () {
  let sound = new Audio("./sounds/tom-3.mp3");
  sound.play();
});

document.querySelector(".d-tom4").addEventListener("click", function () {
  let sound = new Audio("./sounds/tom-4.mp3");
  sound.play();
});

document.querySelector(".j-snare").addEventListener("click", function () {
  let sound = new Audio("./sounds/snare.mp3");
  sound.play();
});

document.querySelector(".k-crash").addEventListener("click", function () {
  let sound = new Audio("./sounds/crash.mp3");
  sound.play();
});

document.querySelector(".l-kick").addEventListener("click", function () {
  let sound = new Audio("./sounds/kick-bass.mp3");
  sound.play();
});

document.addEventListener("keydown", function (event) {
  if ((event.key === "w") | (event.key === "W")) {
    let button = document.querySelector(".w-tom1");
    button.classList.add("active");
  } else if ((event.key === "a") | (event.key === "A")) {
    let button = document.querySelector(".a-tom2");
    button.classList.add("active");
  } else if ((event.key === "s") | (event.key === "S")) {
    let button = document.querySelector(".s-tom3");
    button.classList.add("active");
  } else if ((event.key === "d") | (event.key === "D")) {
    let button = document.querySelector(".d-tom4");
    button.classList.add("active");
  } else if ((event.key === "j") | (event.key === "J")) {
    let button = document.querySelector(".j-snare");
    button.classList.add("active");
  } else if ((event.key === "k") | (event.key === "K")) {
    let button = document.querySelector(".k-crash");
    button.classList.add("active");
  } else if ((event.key === "l") | (event.key === "L")) {
    let button = document.querySelector(".l-kick");
    button.classList.add("active");
  }
});

document.addEventListener("keyup", function (event) {
  if ((event.key === "w") | (event.key === "W")) {
    let button = document.querySelector(".w-tom1");
    button.click();
    button.classList.remove("active");
  } else if ((event.key === "a") | (event.key === "A")) {
    let button = document.querySelector(".a-tom2");
    button.click();
    button.classList.remove("active");
  } else if ((event.key === "s") | (event.key === "S")) {
    let button = document.querySelector(".s-tom3");
    button.click();
    button.classList.remove("active");
  } else if ((event.key === "d") | (event.key === "D")) {
    let button = document.querySelector(".d-tom4");
    button.click();
    button.classList.remove("active");
  } else if ((event.key === "j") | (event.key === "J")) {
    let button = document.querySelector(".j-snare");
    button.click();
    button.classList.remove("active");
  } else if ((event.key === "k") | (event.key === "K")) {
    let button = document.querySelector(".k-crash");
    button.click();
    button.classList.remove("active");
  } else if ((event.key === "l") | (event.key === "L")) {
    let button = document.querySelector(".l-kick");
    button.click();
    button.classList.remove("active");
  }
});
