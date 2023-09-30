const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Whale Shark", "Blue Whale"],
        answer: "Blue Whale"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Ag", "Ge"],
        answer: "Au"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll(".options button");
const scoreElement = document.getElementById("score");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = currentQuestion.options[i];
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
    updateScore();
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function endQuiz() {
    questionElement.textContent = "Quiz completed!";
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].style.display = "none";
    }
    updateScore();
}

showQuestion();

optionElements.forEach((option) => {
    option.addEventListener("click", () => {
        checkAnswer(option.textContent);
    });
});
