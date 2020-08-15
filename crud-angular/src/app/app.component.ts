import { Component } from '@angular/core';

import { AppService } from './app.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  clients: Person[];
  openClosePopupAddPerson: boolean = false;

  constructor(private AppService: AppService) {
    this.clients = AppService.clientList


  }
}
