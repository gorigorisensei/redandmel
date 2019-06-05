var Mogu = Math.floor(Math.random() * 6 + 1);
var Red = Math.floor(Math.random() * 6 + 1);

if (Mogu > Red) {
  document.querySelector(".Mogu").setAttribute("src", "images/moguhappy.jpg");
  document.querySelector(".Red").setAttribute("src", "images/redangry.jpg");
  document.querySelector("h1").innerHTML = "Mogu Wins!";
} else if (Red > Mogu) {
  document.querySelector(".Red").setAttribute("src", "images/redhappy.jpg");
  document.querySelector(".Mogu").setAttribute("src", "images/moguangry.jpg");
  document.querySelector("h1").innerHTML = "Red Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a draw!";
  document.querySelector(".Mogu").setAttribute("src", "images/moguangry.jpg");
  document.querySelector(".Red").setAttribute("src", "images/redangry.jpg");
}
