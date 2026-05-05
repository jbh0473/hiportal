const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate-btn');
const timestampContainer = document.getElementById('timestamp');

function updateTimestamp() {
    const now = new Date();
    const formattedDate = now.toLocaleString('ko-KR');
    timestampContainer.textContent = `생성 일시: ${formattedDate}`;
}

function generateNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.sort((a, b) => a - b);
    return numbers;
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    numbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    });
}

generateBtn.addEventListener('click', () => {
    const newNumbers = generateNumbers();
    displayNumbers(newNumbers);
    updateTimestamp();
});

// Initial display
displayNumbers(generateNumbers());
updateTimestamp();