document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const countDisplay = document.getElementById("count");
    const errorDisplay = document.getElementById("error");
    const clearButton = document.getElementById("clear");

    document.getElementById("increment").addEventListener("click", () => {
        count++;
        updateDisplay();
        errorDisplay.classList.add("hidden");
    });

    document.getElementById("decrement").addEventListener("click", () => {
        if (count > 0) {
            count--;
            errorDisplay.classList.add("hidden");
        } else {
            errorDisplay.classList.remove("hidden");
        }
        updateDisplay();
    });

    clearButton.addEventListener("click", () => {
        count = 0;
        errorDisplay.classList.add("hidden");
        updateDisplay();
        clearButton.classList.add("hidden");
    });

    function updateDisplay() {
        countDisplay.textContent = count;
        if (count > 1) {
            clearButton.classList.remove("hidden");
        } else if (count === 0) {
            clearButton.classList.add("hidden");
        }
    }
});
