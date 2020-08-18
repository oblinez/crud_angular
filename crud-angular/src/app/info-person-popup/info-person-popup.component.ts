import { AppComponent } from './../app.component';
import { Person } from './../person';
import { AppService } from './../app.service';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

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
    if (!this.person.name)
    {
      this.nameErrorMsg = "Campo Nome Obrigatório"
      return
    }

    if (!this.person.phone)
    {
      this.phoneErrorMsg = "Campo Celular Obrigatório"
      return
    }else if (this.person.phone.length <= 12 || this.person.phone.length >= 14) {
      this.person.phone = ''
      this.phoneErrorMsg = "Campo Celular são 13 Dígitos"
      return
    }

    if (!this.person.cpf)
    {
      this.cpfErrorMsg = "Campo Cpf Obrigatório"
      return
    }else if (this.person.cpf.length <= 10 || this.person.cpf.length >= 12) {
      this.person.cpf = ''
      this.cpfErrorMsg = "Campo CPF são 11 Dígitos"
      return
    }
    this.AppService.personList[this.personIndexToEdit] = this.person;
    this.AppComponent.updatePersonList()
    this.closePopup();
  }

}
