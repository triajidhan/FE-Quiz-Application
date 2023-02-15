import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'val-required',
    templateUrl: './validation-required.component.html',
})
export class ValidationRequiredComponent {
    @Input() formGroup: FormGroup = new FormGroup({})
    @Input() data = ""
    @Input() name = ""
}
