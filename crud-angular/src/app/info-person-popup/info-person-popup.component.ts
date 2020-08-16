import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-person-popup',
  templateUrl: './info-person-popup.component.html',
  styleUrls: ['./info-person-popup.component.scss']
})
export class InfoPersonPopupComponent implements OnInit {

  form = {name: '',  phone: '', cpf: ''}
  form2;

  arrayN: number

  constructor(private AppService: AppService) {
    this.form2 = AppService.personList
  }

  ngOnInit(): void {
  }

}
