// Selecting Element
let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let changeBy = document.getElementById("changeBy");
let count = 0;

// Increasing function
increaseBtn.onclick = function () {
  const changeByValue = parseInt(changeBy.value); // change string in to number
  count = count + changeByValue;
  counter.textContent = count;
};

// Reset function
resetBtn.onclick = function () {
  count = 0;
  counter.textContent = count;
};

// Decreasing function
decreaseBtn.onclick = function () {
  const changeByValue = parseInt(changeBy.value); // change string in to number
  count = count - changeByValue;
  counter.textContent = count;
};

// Dark Mode
const darkModeCheckbox = document.getElementById("darkModeCheckbox");
darkModeCheckbox.addEventListener("change", () => {
  if (darkModeCheckbox.checked) {
    document.body.classList.add("dark");
    document.getElementById("counterBox").classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    document.getElementById("counterBox").classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// Load saved mode
window.onload = function () {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("counterBox").classList.add("dark");
    darkModeCheckbox.checked = true;
  }
};
