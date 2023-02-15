import { NgModule } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { ButtonAddComponent } from "./button-add/button-add.component"

@NgModule({
    declarations: [
        ButtonAddComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        ButtonAddComponent
    ]
})

export class ButtonShareModule { }