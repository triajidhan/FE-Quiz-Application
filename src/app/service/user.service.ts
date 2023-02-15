import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { MessegeResDto } from "../dto/messege/messege.res.dto"
import { UserDto } from "../dto/user/user.dto"
import { UsersDto } from "../dto/user/users.dto"
import { BASE_URL } from "../utils/base-url"

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<UsersDto> {
        return this.httpClient.get<UsersDto>(`${BASE_URL.API}/users`)
    }

    getById(id: string): Observable<UserDto> {
        return this.httpClient.get<UserDto>(`${BASE_URL.API}/users/${id}`)
    }

    insert(data: any): Observable<MessegeResDto> {
        return this.httpClient.post<MessegeResDto>(`${BASE_URL.API}/users`, data)
    }

    update(data: any): Observable<MessegeResDto> {
        return this.httpClient.put<MessegeResDto>(`${BASE_URL.API}/users`, data)
    }

    delete(id: string): Observable<MessegeResDto> {
        return this.httpClient.delete<MessegeResDto>(`${BASE_URL.API}/users/${id}`)
    }

    getUsers(): Observable<any[]> {
        return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users');
    }
}
