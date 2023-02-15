import { NgModule } from "@angular/core"
import { MatIconModule } from "@angular/material/icon"
import { TitleComponent } from "./title.component"

@NgModule({
    declarations: [
        TitleComponent
    ],
    imports: [
        MatIconModule
    ],
    exports: [
        TitleComponent
    ]
})

export class TitleShareModule { }