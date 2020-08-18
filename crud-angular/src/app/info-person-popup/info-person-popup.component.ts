import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

import { AppComponent } from './../app.component';
import { Person } from './../person';
import { AppService } from './../app.service';

@Component({
  selector: 'info-person-popup',
  templateUrl: './info-person-popup.component.html',
  styleUrls: ['./info-person-popup.component.scss']
})
export class InfoPersonPopupComponent implements OnInit{

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Input() personIndexToEdit: number;

  personList: Person[];
  person: Person;
  nameErrorMsg: string
  phoneErrorMsg: string
  cpfErrorMsg: string

  constructor(private AppService: AppService, private AppComponent: AppComponent) {
    this.personList = this.AppService.personList
  }

  ngOnInit() {
    this.person = {...this.personList[this.personIndexToEdit]}
    console.log(this.person)
  }

  closePopup() {
    this.close.emit(false);
  }

  submit() {
    if (!this.inputCheck()) return
    this.AppService.personList[this.personIndexToEdit] = this.person;
    this.AppComponent.updatePersonList()
    this.closePopup();
  }

  inputCheck()  {
    if (!this.person.name) { this.nameErrorMsg = "Campo nome obrigatório"; return }
    if (!this.person.phone) { this.phoneErrorMsg = "Campo celular obrigatório"; return }
    else if (this.person.phone.length <= 12 || this.person.phone.length >= 14)
    {
      this.person.phone = ''
      this.phoneErrorMsg = "Campo celular são 13 dígitos"
      return
    }
    if (!this.person.cpf) { this.cpfErrorMsg = "Campo CPF obrigatório"; return }
    else if (this.person.cpf.length <= 10 || this.person.cpf.length >= 12)
    {
      this.person.cpf = ''
      this.cpfErrorMsg = "Campo CPF são 11 dígitos"
      return
    }

    return true

  }

}
