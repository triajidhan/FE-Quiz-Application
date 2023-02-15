import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ValidationEmailComponent } from "./validation-email/validation-email.component"
import { ValidationLeadingTraillingWhiteSpaceComponent } from "./validation-lt-whitespace/validation-lt-whitespace.component"
import { ValidationRequiredComponent } from "./validation-required/validation-required.component"
import { ValidationWhiteSpaceComponent } from "./validation-whitespace/validation-whitespace.component"

@NgModule({
    declarations: [
        ValidationRequiredComponent,
        ValidationWhiteSpaceComponent,
        ValidationLeadingTraillingWhiteSpaceComponent,
        ValidationEmailComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ValidationRequiredComponent,
        ValidationWhiteSpaceComponent,
        ValidationLeadingTraillingWhiteSpaceComponent,
        ValidationEmailComponent
    ]
})

export class ValidationShareModule { }