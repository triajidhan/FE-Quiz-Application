import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'val-whitespace',
    templateUrl: './validation-whitespace.component.html',
})
export class ValidationWhiteSpaceComponent {
    @Input() formGroup: FormGroup = new FormGroup({})
    @Input() data = ""
    @Input() name = ""
}
