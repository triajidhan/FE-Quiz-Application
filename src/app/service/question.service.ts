import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { MessegeResDto } from "../dto/messege/messege.res.dto"
import { QuestionDto } from "../dto/question/question.dto"
import { QuestionsDto } from "../dto/question/questions.dto"
import { BASE_URL } from "../utils/base-url"

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<QuestionsDto> {
        return this.httpClient.get<QuestionsDto>(`${BASE_URL.API}/questions`)
    }

    getRandom(): Observable<QuestionsDto> {
        return this.httpClient.get<QuestionsDto>(`${BASE_URL.API}/questions/random`)
    }

    getById(id: string): Observable<QuestionDto> {
        return this.httpClient.get<QuestionDto>(`${BASE_URL.API}/questions/${id}`)
    }

    insert(data: any): Observable<MessegeResDto> {
        return this.httpClient.post<MessegeResDto>(`${BASE_URL.API}/questions`, data)
    }

    update(data: any): Observable<MessegeResDto> {
        return this.httpClient.put<MessegeResDto>(`${BASE_URL.API}/questions`, data)
    }

    delete(id: string): Observable<MessegeResDto> {
        return this.httpClient.delete<MessegeResDto>(`${BASE_URL.API}/questions/${id}`)
    }
}
