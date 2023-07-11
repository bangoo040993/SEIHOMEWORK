
let count = 0;
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const input = document.getElementById('input');

incrementButton.addEventListener('click', () => {
    const inputValue = parseInt(input.value);
    if (!isNaN(inputValue)) {
        count += inputValue;
    } else {
        count++;
    }
    updateCountDisplay();
});

decrementButton.addEventListener('click', () => {
    const inputValue = parseInt(input.value);
    if (!isNaN(inputValue)) {
        count -= inputValue;
    } else {
        count--;
    }
    updateCountDisplay();
});



// Helper functions
function updateCountDisplay() {
    countDisplay.textContent = count;
}