import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Observable, tap } from "rxjs"
import { ApiService } from "../service/api.service"
import { ErrorService } from "../service/error.service"

@Injectable()
export class FilterTokenInterceptor implements HttpInterceptor {

    constructor(
        private apiService: ApiService,
        private errorService: ErrorService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.apiService.getToken()
        let reqClone = req

        if (token) {
            reqClone = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.apiService.getToken()}`
                }
            })
        }

        return next.handle(reqClone).pipe(
            tap({
                next: data => {
                    if (data instanceof HttpResponse) {
                        if (data.body.message) {
                            this.errorService.showError(data.body.message)
                        }
                    }
                },
                error: err => {
                    if (err instanceof HttpErrorResponse) {
                        this.errorService.showError(err.error.message)
                        if (err.error.message == 'Invalid token') {
                            this.apiService.logOut()
                            this.router.navigateByUrl('/')
                        }
                    }
                }
            })
        )
    }

}
