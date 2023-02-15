import { Answer } from "./answer"
import { Base } from "./base"

export interface Question extends Base {
    question: string
    answers: Answer[]
}