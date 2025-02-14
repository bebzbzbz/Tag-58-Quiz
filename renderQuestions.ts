import { mediumQuestions } from "./data";
// import { checkAnswer } from "./checkAnswer";

const contentElement = document.querySelector("#content")!

function renderQuestions() {
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
                if(choice === question.answer) {
                    choiceBtn.classList.add("correct")
                } else {
                    choiceBtn.classList.add("false")
                }
            })
            choicesContainer.appendChild(choiceBtn)
        })
    })
}
renderQuestions();