import { AppComponent } from '../app.component';
import { Person } from './../person';
import { AppService } from './../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'delete-person-popup-confirmation',
  templateUrl: './delete-person-popup-confirmation.component.html',
  styleUrls: ['./delete-person-popup-confirmation.component.scss']
})
export class DeletePersonPopupConfirmationComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter()
  // @Output() newList: EventEmitter<Person[]> = new EventEmitter()
  // @Input() person: Person
  // @Input() personList: Person[]

  private _appService: AppService;

  victim: Person[];


  constructor(private AppService: AppService, private AppComponent: AppComponent ) {
    // this.victim = AppService.personList
    this._appService = this.AppService;

  }

  ngOnInit(){
  }

  exclude() {
    // this.victim = this.personList.filter((value, i) => (i !== this.personIndex))
    this.close.emit(false)
    this.AppComponent.deletePerson()
    this.AppComponent.updatePersonList()
  }

  cancel()  {
    this.close.emit(false)
  }
}
