// Selecting Element
let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    counter.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counter.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    counter.textContent = count;
}
