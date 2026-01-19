let count = 0;

function incrementCounter() {
    count = count + 1;
    document.getElementById("counter-display").textContent = count;
}
document.getElementById("counter-button").addEventListener("click", incrementCounter);

function clearCounter() {
    count = 0
    document.getElementById("counter-display").textContent = count;
}
document.getElementById("clear-button").addEventListener("click", clearCounter);