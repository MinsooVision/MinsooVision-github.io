const button = document.querySelector(".action-btn");

// button.addEventListener("click", () => {
//   setTimeout(() => {
//     alert("Clicked");
//   }, 2000);
// });

button.addEventListener("click", () => {
  setTimeout(() => {
    button.style.backgroundColor = "red";
  }, 1000);
});
