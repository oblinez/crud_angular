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
  // personList: Person[];
  nameErrorMsg: string
  phoneErrorMsg: string
  cpfErrorMsg: string

  constructor(private AppService: AppService, private AppComponent: AppComponent) {
    // this.personList = AppService.personList;
    this._appService = this.AppService;
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.form.name)
    {
      this.nameErrorMsg = "Campo Nome Obrigatório"
      return
    }

    if (!this.form.phone)
    {
      this.phoneErrorMsg = "Campo Celular Obrigatório"
      return
    }else if (this.form.phone.length <= 12 || this.form.phone.length >= 14) {
      this.form.phone = ''
      this.phoneErrorMsg = "Campo Celular são 13 Dígitos"
      return
    }

    if (!this.form.cpf)
    {
      this.cpfErrorMsg = "Campo Cpf Obrigatório"
      return
    }else if (this.form.cpf.length <= 10 || this.form.cpf.length >= 12) {
      this.form.cpf = ''
      this.cpfErrorMsg = "Campo CPF são 11 Dígitos"
      return
    }

    // const test = this._appService.personList.every((value) => (JSON.stringify(value) != JSON.stringify(this.form)))
    // if (test) {
      // this.personList.push(this.form)
      this.AppComponent.addPerson(this.form);
      this.close.emit(false)
      this.AppComponent.updatePersonList()
    // }else{
    //   this.accountDuplicateErrorMsg = "Cadastro já existe"
    // }
  }

  closePopup() {
    this.close.emit(false);
  }

}

