const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate-btn');
const timestampContainer = document.getElementById('timestamp');

function updateTimestamp() {
    const now = new Date();
    const formattedDate = now.toLocaleString('ko-KR');
    timestampContainer.textContent = `생성 일시: ${formattedDate}`;
}

function generateSingleSet() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.sort((a, b) => a - b);

    let bonus;
    do {
        bonus = Math.floor(Math.random() * 45) + 1;
    } while (numbers.includes(bonus));

    return { main: numbers, bonus: bonus };
}

function displaySets(sets) {
    numbersContainer.innerHTML = '';
    
    sets.forEach((set, index) => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('number-row');

        // Sequential Number
        const indexDiv = document.createElement('div');
        indexDiv.classList.add('row-index');
        indexDiv.textContent = index + 1;
        rowDiv.appendChild(indexDiv);

        // Main Numbers
        set.main.forEach((num, numIndex) => {
            const numDiv = document.createElement('div');
            numDiv.classList.add('number');
            numDiv.classList.add(`c${numIndex % 4}`); // Cycle through 4 Google colors
            numDiv.textContent = num;
            rowDiv.appendChild(numDiv);
        });

        // Plus Sign
        const plusDiv = document.createElement('div');
        plusDiv.classList.add('bonus-divider');
        plusDiv.textContent = '+';
        rowDiv.appendChild(plusDiv);

        // Bonus Number
        const bonusDiv = document.createElement('div');
        bonusDiv.classList.add('number', 'bonus');
        bonusDiv.textContent = set.bonus;
        rowDiv.appendChild(bonusDiv);

        numbersContainer.appendChild(rowDiv);
    });
}

function generateAndDisplay() {
    const sets = [];
    for (let i = 0; i < 5; i++) {
        sets.push(generateSingleSet());
    }
    displaySets(sets);
    updateTimestamp();
}

generateBtn.addEventListener('click', generateAndDisplay);

// Initial display
generateAndDisplay();
