import { Component, OnDestroy } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { finalize, Observable, Subscription } from "rxjs"
import { ApiService } from "src/app/service/api.service"
import { LoginService } from "src/app/service/login.service"
import { ValidatorService } from "src/app/service/validator.service"
import { PATH } from "src/app/utils/routing-path"
import { ROLE_CODE } from "src/app/utils/user-role"

import { Store } from '@ngrx/store'
import { increment, decrement, reset } from '../../store/actions/counter.action'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
    hide = true
    loadingLogin: boolean = false
    rolePath: string = ""

    count$: Observable<number> = new Observable()


    private loginSubscription?: Subscription

    loginUserForm: FormGroup = this.fb.group({
        userName: ['', [Validators.required, this.validatorService.noWhitespaceValidator(), Validators.maxLength(50)]],
        password: ['', [Validators.required, this.validatorService.noWhitespaceValidator()]]
    })

    constructor(
        private validatorService: ValidatorService,
        private apiService: ApiService,
        private router: Router,
        private store: Store<{ count: number }>,
        private fb: FormBuilder,
        private loginService: LoginService) {
        this.count$ = store.select('count')
    }

    signIn(): void {
        this.loadingLogin = true
        this.loginSubscription = this.loginService.login(this.loginUserForm.value).pipe(finalize(() => this.loadingLogin = false)).subscribe(result => {
            this.apiService.saveData(result)
            if (result.roleCode === ROLE_CODE.CANDIDATE) {
                this.router.navigateByUrl(PATH.LANDING_PAGE)
            } else {
                this.router.navigateByUrl(PATH.DASHBOARD_ADMIN)
            }
        })
    }

    toSignUp(): void {
        this.router.navigateByUrl(PATH.REGISTRATION)
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }

    ngOnDestroy(): void {
        this.loginSubscription?.unsubscribe()
    }
}
