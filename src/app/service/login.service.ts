import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Login } from "../interface/login"
import { BASE_URL } from "../utils/base-url"

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient) { }

    login(data: any): Observable<Login> {
        return this.httpClient.post<Login>(`${BASE_URL.API}/login`, data)
    }
}
