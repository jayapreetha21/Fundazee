document.addEventListener("keypress", function(event) {
  handelClick(event.key);
  bAnimation(event.key);
});
var length = document.querySelectorAll(".drum").length;
for (var i = 0; i <= length; i++) 
{
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    handelClick(buttonInnerHTML);
    bAnimation(buttonInnerHTML);
  });
}

function handelClick(key) {
  switch (key) {
    case "A":
      var audio = new Audio("sounds/a.mp3");
      audio.play();
      break;
    case "B":
      var audio = new Audio("sounds/ball.mp3");
      audio.play();
      break;
    case "C":
      var audio = new Audio("sounds/c.mp3");
      audio.play();
      break;
    case "2":
        var audio = new Audio("sounds/2 two.mp4");
        audio.play();
        break;
    case "3":
        var audio = new Audio("sounds/3 three.mp4");
        audio.play();
        break;
    case "1":
        var audio = new Audio("sounds/1 one.mp4");
        audio.play();
        break;
    case "அ":
        var audio = new Audio("sounds/a adu.mp4");
        audio.play();
        break;
      case "ஆ":
        var audio = new Audio("sounds/a amma.mp4");
        audio.play();
        break;
    case "இ":
        var audio = new Audio("sounds/e elai.mp4");
        audio.play();
        break;
  }
}
function bAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  });
}

