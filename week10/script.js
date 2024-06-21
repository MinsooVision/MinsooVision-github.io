// button.addEventListener("click", () => {
//   alert("Button Clicked!");
// });

const target = document.querySelector(".mode-switch");

const button = document.querySelector(".action-btn");

document.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    button.innerText = "Over 30";
  } else {
    button.innerText = "This is action button";
  }
});

button.addEventListener("click", () => {
  target.classList.toggle("light-mode");
  target.classList.toggle("dark-mode");
});

button.addEventListener("click", () => {
  if (target.classList.contains("light-mode")) {
    target.classList.remove("light-mode");
    target.classList.add("dark-mode");
  } else {
    target.classList.remove("dark-mode");
    target.classList.add("light-mode");
  }
});

button.addEventListener("mouseover", () => {
  console.log("Mouse Over !!");
});

button.addEventListener("mouseout", () => {
  console.log("Mouse Out !!");
});

const parent_element = document.querySelector("#append-element");

var child = document.createElement("child-element");
child.style.width = "150px";
child.style.height = "100px";
child.style.display = "flex";
child.style.alignItems = "center";
child.style.justifyContent = "center";
child.style.margin = "30px auto";
child.style.backgroundColor = "#210AED";
child.style.color = "white";
child.innerText = "I am child :)";

parent_element.appendChild(child);
