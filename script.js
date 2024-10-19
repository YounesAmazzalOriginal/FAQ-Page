const Container = document.querySelector(".Container");
const answer = document.querySelector(".answer");

//
let FAQSwitcher = false;
//
const plus = document.querySelectorAll("seeAnswerClass");
const minus = document.querySelectorAll("hideAnswerClass");
//

function seeAnswerFunc(target) {
  target.parentElement.parentElement.parentElement.style.height = "160px";
  target.parentElement.parentElement.parentElement.style.filter =
    "brightness(95%)";

  target.parentElement.querySelector(".hideAnswerClass").style.display = "flex";
  target.parentElement.querySelector(".seeAnswerClass").style.display = "none";
}
function hideAnswerFunc(target) {
  target.parentElement.parentElement.parentElement.style.height = "40px";
  target.parentElement.parentElement.parentElement.style.filter =
    "brightness(100%)";
  target.parentElement.querySelector(".hideAnswerClass").style.display = "none";
  target.parentElement.querySelector(".seeAnswerClass").style.display = "flex";
}

// Theme Changer

let themeSwitcher = false;
const stylesheet = document.querySelector("#stylesheet");
document
  .querySelector(".themeChangerClass")
  .addEventListener("click", function () {
    if (themeSwitcher == false) {
      themeSwitcher = true;
      //
      this.querySelector("i").style.color = "#121212";
      this.style.backgroundColor = "white";
      //
      stylesheet.href = "stylesDark.css";
    } else {
      themeSwitcher = false;
      //
      this.querySelector("i").style.color = "white";
      this.style.backgroundColor = "#121212";
      //
      stylesheet.href = "styles.css";
    }
  });
