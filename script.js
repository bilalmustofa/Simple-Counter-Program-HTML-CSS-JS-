// Selecting Element
let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let changeBy = document.getElementById("changeBy");
let count = 0;

// Increasing function
increaseBtn.onclick = function() {
    const changeByValue = parseInt(changeBy.value); // change string in to number
    count = count + changeByValue;
    counter.textContent = count;
}

// Reset function
resetBtn.onclick = function() {
    count = 0;
    counter.textContent = count;
}

// Decreasing function
decreaseBtn.onclick = function() {
    const changeByValue = parseInt(changeBy.value); // change string in to number 
    count = count - changeByValue;
    counter.textContent = count;
}

// Dark Mode
const darkModeCheckbox = document.getElementById("darkModeCheckbox");
darkModeCheckbox.addEventListener("change", () => {
    if(darkModeCheckbox.checked){
        document.body.style.backgroundColor = "rgb(39, 41, 45)";
        document.getElementById("counterBox").classList.add("dark");
    } else {
        document.body.style.backgroundColor = "";
        document.getElementById("counterBox").classList.remove("dark");
    }
});

