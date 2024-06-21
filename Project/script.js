// Nav Section

const navigation = document.querySelector("nav");

document.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navigation.style.backgroundColor = "lightgray";
  } else {
    navigation.style.backgroundColor = "lightblue";
  }
});

// Portfolio section

const portfolio_btns = document.querySelectorAll(".web-dev .action-btn");
const portfolio_frame = document.querySelector(".iframe");

portfolio_btns.forEach((button) => {
  button.addEventListener("click", () => {
    allBtnReset();

    const clicked_btn = document.querySelector("#" + button.id);

    if (!clicked_btn.classList.contains("active-btn")) {
      clicked_btn.classList.add("active-btn");
    }

    if (button.id == "week2") {
      portfolio_frame.src = "./../week2/week2.html";
    } else if (button.id == "week3") {
      portfolio_frame.src = "./../week3/week3.html";
    } else if (button.id == "week3-ex") {
      portfolio_frame.src = "./../week3_exercise/exercise.html";
    } else if (button.id == "week4") {
      portfolio_frame.src = "./../week4/week4.html";
    } else if (button.id == "week4-ex") {
      portfolio_frame.src = "./../week4_exercise/index.html";
    } else if (button.id == "week5") {
      portfolio_frame.src = "./../week5/week5.html";
    } else if (button.id == "week6") {
      portfolio_frame.src = "./../week6/week6.html";
    } else if (button.id == "week6-ex") {
      portfolio_frame.src = "./../week6_exercise/exercise.html";
    } else if (button.id == "week7") {
      portfolio_frame.src = "./../week7/week7.html";
    } else if (button.id == "week7-ex") {
      portfolio_frame.src = "./../week7_exercise/exercise.html";
    } else if (button.id == "week9") {
      portfolio_frame.src = "./../week9/week9.html";
    } else if (button.id == "week10") {
      portfolio_frame.src = "./../week10/week10.html";
    }
  });
});

const allBtnReset = () => {
  portfolio_btns.forEach((button) => {
    button.classList.remove("active-btn");
  });
};
