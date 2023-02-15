import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'val-lt-whitespace',
    templateUrl: './validation-lt-whitespace.component.html',
})
export class ValidationLeadingTraillingWhiteSpaceComponent {
    @Input() formGroup: FormGroup = new FormGroup({})
    @Input() data = ""
    @Input() name = ""
}
