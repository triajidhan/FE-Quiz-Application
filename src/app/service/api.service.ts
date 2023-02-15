import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Login } from "../interface/login"
import { PATH } from "../utils/routing-path"
import { ROLE_CODE, ROLE_PATH } from "../utils/user-role"

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private router: Router) { }

    saveData(data: Login): void {
        localStorage.setItem('data', JSON.stringify(data))
    }

    getId(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).id
        }
        return result
    }

    getName(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).fullName
        }
        return result
    }

    getToken(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).token
        }
        return result
    }

    getRoleCode(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).roleCode
        }
        return result
    }

    getRoleName(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).roleName
        }
        return result
    }

    getUserName(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).userName
        }
        return result
    }

    getRolePath(roleCode: string, plural: boolean): string {
        let result = ""
        if (roleCode === ROLE_CODE.CANDIDATE) {
            result = ROLE_PATH.CANDIDATE
        } else {
            result = ROLE_PATH.ADMIN
        }
        if (plural) {
            result += "s"
        }
        return result
    }

    logOut() {
        localStorage.clear()
        this.router.navigateByUrl(PATH.LOGIN)
    }
}
