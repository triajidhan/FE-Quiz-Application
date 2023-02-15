import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    private errorSource = new Subject<string>()
    error$ = this.errorSource.asObservable()

    showError(errorMessage: string) {
        this.errorSource.next(errorMessage)
    }
}