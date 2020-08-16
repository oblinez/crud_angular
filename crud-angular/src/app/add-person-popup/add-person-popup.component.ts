import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppComponent } from './../app.component';
import { AppService } from './../app.service';
import { Person } from './../person';

@Component({
  selector: 'add-person-popup',
  templateUrl: './add-person-popup.component.html',
  styleUrls: ['./add-person-popup.component.scss']
})

export class AddPersonPopupComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  form: Person = {name: undefined, phone: undefined, cpf: undefined};
  msg: string;
  personList: Person[];

  constructor(private AppService: AppService) {
    this.personList = AppService.personList;
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.cpf)
    let test: boolean;
    for (let i = 0; i < this.personList.length; i++) {
      if (this.personList[i].cpf == this.form.cpf) {
        test = true
      }
    }
    if (!test) {
      this.personList.push(this.form)
      this.close.emit(false)
    }else{
      this.msg = "Cadastro já existe"
    }
  }

  closePopup() {
    this.close.emit(false);
  }

}
