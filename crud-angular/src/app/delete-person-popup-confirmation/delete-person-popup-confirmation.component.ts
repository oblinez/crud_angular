import { Component, Output, EventEmitter } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'delete-person-popup-confirmation',
  templateUrl: './delete-person-popup-confirmation.component.html',
  styleUrls: ['./delete-person-popup-confirmation.component.scss']
})
export class DeletePersonPopupConfirmationComponent {

  @Output() close: EventEmitter<boolean> = new EventEmitter()

  constructor(private AppComponent: AppComponent ) {
  }

  exclude() {
    this.close.emit(false)
    this.AppComponent.deletePerson()
    this.AppComponent.updatePersonList()
  }

  cancel()  {
    this.close.emit(false)
  }
}
