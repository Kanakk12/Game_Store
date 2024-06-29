
//   Javascript for cart page

const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");

// on clicking minus button quantity of product decreases
decreaseButton.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

// on clicking plus button quantity of product increases
increaseButton.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
});