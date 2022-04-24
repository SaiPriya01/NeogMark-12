const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const outputEl = document.querySelector('.output');
const answers = ["90°", "obtuse triangle", "5", "True", "hypotenuse"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === answers[index]) {
            score += 1;
        }
        index += 1;
    }
    outputEl.innerText = "Your score is " + score;
}

submitBtn.addEventListener('click', calculateScore);