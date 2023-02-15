import { Component, OnDestroy } from "@angular/core"
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { finalize, Subscription } from "rxjs"
import { QuestionService } from "src/app/service/question.service"
import { ValidatorService } from "src/app/service/validator.service"
import { PATH } from "src/app/utils/routing-path"

@Component({
    selector: 'question-insert',
    templateUrl: './question-insert.component.html',
    styleUrls: ['../question.component.scss']
})
export class QuestionInsertComponent implements OnDestroy {
    loadingInsert: boolean = false

    answerInsertFormArray = this.fb.group({
        details: this.fb.array([
            this.fb.group({
                answer: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator()]],
                isAnswer: [false]
            }),
            this.fb.group({
                answer: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator()]],
                isAnswer: [false]
            }),
            this.fb.group({
                answer: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator()]],
                isAnswer: [false]
            }),
            this.fb.group({
                answer: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator()]],
                isAnswer: [false]
            })
        ])
    })

    questionInsertForm: FormGroup = this.fb.group({
        question: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator()]],
        trueAnswer: [''],
        answers: this.answerInsertFormArray.controls.details
    })


    private questionInsertSubscription?: Subscription

    constructor(
        private questionService: QuestionService,
        private router: Router,
        private validatorService: ValidatorService,
        private fb: FormBuilder) { }

    get details(): FormArray {
        return this.answerInsertFormArray.get('details') as FormArray
    }

    onAdd() {
        if (this.details.length < 6) {
            const newAnswerInsertForm = this.fb.group({
                answer: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator()]],
                isAnswer: [false]
            })
            this.details.push(newAnswerInsertForm)
            this.questionInsertForm.controls['trueAnswer'].setValue('')
        }
    }

    onRemove(idx: number) {
        this.details.removeAt(idx)
        this.questionInsertForm.controls['trueAnswer'].setValue('')

    }

    submitQuestion() {
        this.loadingInsert = true
        for (let i = 0; i < this.details.length; i++) {
            if (i === this.questionInsertForm.value.trueAnswer) {
                this.questionInsertForm.value.answers[i].isAnswer = true
            } else {
                this.questionInsertForm.value.answers[i].isAnswer = false
            }
        }
        this.questionInsertSubscription = this.questionService.insert(this.questionInsertForm.value).pipe(finalize(() => this.loadingInsert = false)).subscribe(() => {
            this.router.navigateByUrl(PATH.LIST_QUESTION)
        })
    }

    ngOnDestroy(): void {
        this.questionInsertSubscription?.unsubscribe()
    }
}
