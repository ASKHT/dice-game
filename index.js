document.querySelector("button").addEventListener("click", handleclick);
function handleclick() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomdiceImages = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
  var randomImagesource = "images/" + randomdiceImages; //images/dice1.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImagesource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomdiceImages2 = "dice" + randomNumber2 + ".png"; //dice1.png-dice6.png
  var randomImagesource2 = "images/" + randomdiceImages2; //images/dice1.png
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImagesource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
