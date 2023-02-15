import { NgModule } from "@angular/core"
import { MainModule } from "src/app/shared/module/main.module"
import { RegistrationComponent } from "./registration.component"
import { RegistrationRouting } from "./registration.routing"
import { MatStepperModule } from '@angular/material/stepper'

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        RegistrationRouting,
        MainModule,
        MatStepperModule
    ],
    exports: [
        RegistrationComponent
    ]
})

export class RegistrationModule { }