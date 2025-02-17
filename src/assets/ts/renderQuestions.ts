import { mediumQuestions } from "./data";
import { checkAnswer } from "./checkAnswer";
import { updateScore } from "./updateScore";
import { correctAnswers } from "./checkAnswer";

const contentElement = document.querySelector("#content")!

function renderQuestions() {
    const scoreElement = document.createElement("p");
    scoreElement.classList.add("score");
    contentElement.appendChild(scoreElement);
    scoreElement.textContent = `0 : 10`;

    mediumQuestions.forEach((question) => {
        const questionCard = document.createElement("div")
        questionCard.style.backgroundImage = `url(${question.url})`
        questionCard.innerHTML = `<p>${question.question}</p>`
        questionCard.classList.add("question-card")
        contentElement.appendChild(questionCard)

        const choicesContainer = document.createElement("div")
        choicesContainer.classList.add("choices-container")
        questionCard.appendChild(choicesContainer)

        question.choices.forEach((choice) => {
            const choiceBtn = document.createElement("button")
            choiceBtn.innerText = choice.toString()

            choiceBtn.addEventListener("click", () => {
                checkAnswer(choice, question, choiceBtn);
                updateScore(correctAnswers, scoreElement);
            })

            choicesContainer.appendChild(choiceBtn)
        })
    })
}
renderQuestions();