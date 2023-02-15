import { Component, OnDestroy, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { finalize, Subscription } from "rxjs"
import { QuestionService } from "src/app/service/question.service"
import { ValidatorService } from "src/app/service/validator.service"
import { PATH } from "src/app/utils/routing-path"

@Component({
    selector: 'question-update',
    templateUrl: './question-update.component.html',
    styleUrls: ['../question.component.scss']
})
export class QuestionUpdateComponent implements OnInit, OnDestroy {
    loadingUpdate: boolean = false
    question: any = new Object()

    questionUpdateForm: FormGroup = this.fb.group({
        id: [''],
        version: [0],
        question: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator()]],
        answers: this.fb.array([])
    })


    private questionUpdateSubscription?: Subscription
    private getByIdQuestionSubscription?: Subscription

    constructor(
        private questionService: QuestionService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private validatorService: ValidatorService,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            this.getByIdQuestionSubscription = this.questionService.getById(result['id']).subscribe(result => {
                console.log(result.data)
                this.question = result.data
                this.questionUpdateForm.controls['id'].setValue(result.data.id)
                this.questionUpdateForm.controls['version'].setValue(result.data.version)
            })
        })
    }

    onUpdate() {
        this.questionUpdateSubscription = this.questionService.insert(this.questionUpdateForm.value).pipe(finalize(() => this.loadingUpdate = false)).subscribe(() => {
            this.router.navigateByUrl(PATH.LIST_QUESTION)
        })
    }

    ngOnDestroy(): void {
        this.questionUpdateSubscription?.unsubscribe()
        this.getByIdQuestionSubscription?.unsubscribe()
    }
}
