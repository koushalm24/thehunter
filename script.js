// var image = document.querySelector("#sova>img");
// var p1 = document.querySelector("#page1");

var sound1 = document.getElementById("rervealingarera");
var sound2 = document.getElementById("shock");
var sound3 = document.getElementById("takeflight");
var sound4 = document.getElementById("ultimate");

var b1 = document.getElementById("recon");
var b2 = document.getElementById("shockdart");
var b3 = document.getElementById("drone");
var b4 = document.getElementById("fury");

// p1.addEventListener("mousemove", function (dets) {
//   image.style.top = 30 + 1 - dets.y * 0.01 + "px";
//   image.style.left = 350 + 1 - dets.x * 0.01 + "px";
// });

b1.addEventListener("touchend", (e) => {
  e.preventDefault();
  sound1.play();
});

b2.addEventListener("touchend", (e) => {
  e.preventDefault();
  sound2.play();
});

b3.addEventListener("touchend", (e) => {
  e.preventDefault();
  sound3.play();
});

b4.addEventListener("touchend", (e) => {
  e.preventDefault();
  sound4.play();
});

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key == "e") {
    sound1.play();
  } else if (e.key == "q") {
    sound2.play();
  } else if (e.key == "c") {
    sound3.play();
  } else if (e.key == "x") {
    sound4.play();
  } else {
    console.log("Press E,Q,C or X");
  }
});
