import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'btn-add',
  templateUrl: './button-add.component.html',
})
export class ButtonAddComponent {
  @Output() onClick = new EventEmitter<any>()
  @Input() routerLink = ""

  click() {
    this.onClick.emit()
  }
}
