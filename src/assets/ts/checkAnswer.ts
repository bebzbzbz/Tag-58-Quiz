import { QuizItem } from "./data";

export const correctAnswers : any[] = [];
export const allTries : any[] = [];

export function checkAnswer(choice: string | boolean | number, question: QuizItem, choiceBtn: HTMLButtonElement) {
    if(choice === question.answer) {
        choiceBtn.classList.add("correct");
        correctAnswers.push(choice);
    } else {
        choiceBtn.classList.add("false");
    }
    for (const btn of choiceBtn.parentNode!.children) {
        btn.setAttribute("disabled", "disabled")
    }
    allTries.push(choice)
}
