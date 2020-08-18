import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppComponent } from '../app.component';
import { AppService } from './../app.service';
import { Person } from './../person';

@Component({
  selector: 'add-person-popup',
  templateUrl: './add-person-popup.component.html',
  styleUrls: ['./add-person-popup.component.scss']
})

export class AddPersonPopupComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  private _appService: AppService;

  form: Person = {name: undefined, phone: undefined, cpf: undefined};
  accountDuplicateErrorMsg: string;
  nameErrorMsg: string
  phoneErrorMsg: string
  cpfErrorMsg: string

  constructor(private AppService: AppService, private AppComponent: AppComponent) {
    this._appService = this.AppService;
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.personDuplicateCheck() && this.inputCheck()) this.addPersonToArray()
  }

  closePopup() {
    this.close.emit(false);
  }

  personDuplicateCheck()  {
    const test = this._appService.personList.every((value) => (JSON.stringify(value) != JSON.stringify(this.form)))
    if (!test) this.accountDuplicateErrorMsg = "Cadastro já existe"
    return test
  }

  addPersonToArray()  {
    this.AppComponent.addPerson(this.form);
    this.close.emit(false)
    this.AppComponent.updatePersonList()
  }

  inputCheck()  {
    if (!this.form.name) { this.nameErrorMsg = "Campo nome obrigatório"; return }
    if (!this.form.phone) { this.phoneErrorMsg = "Campo celular obrigatório"; return }
    else if (this.form.phone.length <= 12 || this.form.phone.length >= 14)
    {
      this.form.phone = ''
      this.phoneErrorMsg = "Campo celular são 13 dígitos"
      return
    }
    if (!this.form.cpf) { this.cpfErrorMsg = "Campo CPF obrigatório"; return }
    else if (this.form.cpf.length <= 10 || this.form.cpf.length >= 12)
    {
      this.form.cpf = ''
      this.cpfErrorMsg = "Campo CPF são 11 dígitos"
      return
    }
    return true
  }
}
