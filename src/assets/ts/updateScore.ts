import { allTries } from "./checkAnswer"

export function updateScore(correctAnswers: any[] = [], scoreElement: HTMLParagraphElement) {
    scoreElement.textContent = `${correctAnswers.length} : 10`

    if(allTries.length === 10) {
        switch(true) {
            case correctAnswers.length === 10: 
                scoreElement.innerHTML += `<br> Perfect score! You're so smart!`
                break;
            case correctAnswers.length >= 7 && correctAnswers.length < 10:
                scoreElement.innerHTML += `<br> Great job!`
                break;
            case correctAnswers.length < 7 && correctAnswers.length >= 5:
                scoreElement.innerHTML += `<br> Not bad!`
                break;
            case correctAnswers.length < 5:
                scoreElement.innerHTML += `<br> Better luck next time!`
                break;
        }
    }
}