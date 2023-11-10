var image = document.querySelector("#sova>img");
var p1 = document.querySelector("#page1");

p1.addEventListener("mousemove", function (dets) {
  image.style.top = 30 + 1 - dets.y * 0.01 + "px";
  image.style.left = 350 + 1 - dets.x * 0.01 + "px";
});
