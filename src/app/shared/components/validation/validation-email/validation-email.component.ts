import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'val-email',
    templateUrl: './validation-email.component.html',
})
export class ValidationEmailComponent {
    @Input() formGroup: FormGroup = new FormGroup({})
    @Input() data = ""
    @Input() name = ""
}
