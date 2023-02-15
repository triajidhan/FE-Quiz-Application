import { Component, OnDestroy } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { finalize, Subscription } from "rxjs"
import { UserService } from "src/app/service/user.service"
import { ValidatorService } from "src/app/service/validator.service"
import { PATH } from "src/app/utils/routing-path"
import { ROLE_CODE } from "src/app/utils/user-role"

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnDestroy {
    hide = true
    hideConfirm = true
    loadingRegistration: boolean = false
    rolePath: string = ""

    private registrationSubscription?: Subscription

    registrationUserForm: FormGroup = this.fb.group({
        fullName: ['', [Validators.required, this.validatorService.noLeadingTrailingWhitespaceValidator(), Validators.maxLength(50)]],
        userName: ['', [Validators.required, this.validatorService.noWhitespaceValidator(), Validators.maxLength(50)]],
        password: ['', [Validators.required, this.validatorService.noWhitespaceValidator()]],
        confirmPassword: ['', [Validators.required, this.validatorService.noWhitespaceValidator()]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
        roleCode: [ROLE_CODE.CANDIDATE]
    })

    constructor(
        private validatorService: ValidatorService,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService) { }

    signUp(): void {
        this.loadingRegistration = true
        this.registrationSubscription = this.userService.insert(this.registrationUserForm.value).pipe(finalize(() => this.loadingRegistration = false)).subscribe(result => {
            this.toSignIn()
        })
    }

    toSignIn() {
        this.router.navigateByUrl(PATH.LOGIN)
    }

    ngOnDestroy(): void {
        this.registrationSubscription?.unsubscribe()
    }
}
