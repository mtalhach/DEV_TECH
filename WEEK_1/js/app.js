const toggleButton = document.getElementsByClassName("toggle-btn")[0];

const navBar = document.getElementsByClassName("navBar-links")[0];
const navBtn = document.getElementsByClassName("navBar-btn")[0];

toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
  navBtn.classList.toggle("active");
});
