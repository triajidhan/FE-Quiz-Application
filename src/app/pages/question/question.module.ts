import { NgModule } from "@angular/core"
import { MasterModule } from "src/app/shared/module/master.module"
import { QuestionInsertComponent } from "./question-insert/question-insert.component"
import { QuestionListComponent } from "./question-list/question-list.component"
import { QuestionUpdateComponent } from "./question-update/question-update.component"
import { QuestionRouting } from "./question.routing"

@NgModule({
    declarations: [
        QuestionListComponent,
        QuestionInsertComponent,
        QuestionUpdateComponent
    ],
    imports: [
        QuestionRouting,
        MasterModule
    ],
    exports: [
        QuestionListComponent,
        QuestionInsertComponent,
        QuestionUpdateComponent
    ]
})
export class QuestionModule { }
