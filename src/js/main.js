//Variables:
const maxNumber = 6;
const minNumber = 1;
const [generateFirst, generateSecond, generateThird] = document.querySelectorAll(".generateButton");

//Buttons:
generateFirst.addEventListener("click", () => { generateRandom(1); });
generateSecond.addEventListener("click", () => { generateRandom(2); });
generateThird.addEventListener("click", () => { generateRandom(3); });

//Functions:
const generateRandom = (generateNumber) => {
    const num = randomNumber(minNumber, maxNumber);
    const img = document.querySelector(`#dice${generateNumber} img`);
    img.src = `images/dice-six-faces-${num}.svg`;
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}