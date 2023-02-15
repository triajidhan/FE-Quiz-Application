import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { QuestionInsertComponent } from "./question-insert/question-insert.component"
import { QuestionListComponent } from "./question-list/question-list.component"
import { QuestionUpdateComponent } from "./question-update/question-update.component"

const routes: Routes = [
    {
        path: '',
        component: QuestionListComponent
    },
    {
        path: 'add',
        component: QuestionInsertComponent
    },
    {
        path: 'edit/:id',
        component: QuestionUpdateComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class QuestionRouting { }