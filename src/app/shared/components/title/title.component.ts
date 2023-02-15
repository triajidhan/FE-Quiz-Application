import { Component, Input } from "@angular/core"
import { Location } from '@angular/common'

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent {
    @Input() name = ""

    constructor(private location: Location) { }

    onBack() {
        this.location.back()
    }
}