import { Person } from './../person';
import { AppService } from './../app.service';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-person-popup',
  templateUrl: './info-person-popup.component.html',
  styleUrls: ['./info-person-popup.component.scss']
})
export class InfoPersonPopupComponent implements OnInit{

  private _appService: AppService

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Input() personIndex: number; //nao esta usando

  personList: Person[];
  person: Person;

  constructor(private AppService: AppService) {
    // this.personList = AppService.personList
    this._appService = this.AppService
  }

  ngOnInit() {
    this.person = {...this.personList[this.personIndex]}
    console.log(this.personIndex)
  }

  closePopup() {
    this.close.emit(false);
  }

  submit() {
    // this._appService.updateInfo
    this.personList[this.personIndex] = this.person;
    this.closePopup();
  }

}
