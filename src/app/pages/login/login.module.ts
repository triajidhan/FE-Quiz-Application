import { NgModule } from "@angular/core"
import { MainModule } from "src/app/shared/module/main.module"
import { LoginComponent } from "./login.component"
import { LoginRouting } from "./login.routing"
import { AsyncPipe } from '@angular/common'

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRouting,
        MainModule,
        AsyncPipe
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule { }