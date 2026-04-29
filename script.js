// Selecting Element
let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let changeBy = document.getElementById("changeBy");
const darkModeCheckbox = document.getElementById("darkModeCheckbox");
let count = 0;

// Increasing function
increaseBtn.onclick = function () {
  const changeByValue = parseInt(changeBy.value) || 1; // change string in to number
  count = count + changeByValue;
  counter.textContent = count;
  localStorage.setItem("counter", count);   // Save value
};

// Reset function
resetBtn.onclick = function () {
  count = 0;
  counter.textContent = count;
  localStorage.setItem("counter", count);   // Save value
};

// Decreasing function
decreaseBtn.onclick = function () {
  const changeByValue = parseInt(changeBy.value) || 1; // change string in to number
  count = count - changeByValue;
  counter.textContent = count;
  localStorage.setItem("counter", count);   // Save value
};

// Dark Mode
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
// Load Save
window.onload = function () {
  let savedCount = localStorage.getItem("counter");
  if (savedCount !== null && !isNaN(savedCount)) {
    count = parseInt(savedCount);
  } else {
    count = 0;
  }
  counter.textContent = count;
  
  // Load saved theme mode
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("counterBox").classList.add("dark");
    darkModeCheckbox.checked = true;
  }
};
    
