import { Question } from "src/app/interface/question"

export class QuestionDto {
    private _data!: Question

    public set data(_data: Question) {
        this._data = _data;
    }

    public get data(): Question {
        return this._data
    }
}