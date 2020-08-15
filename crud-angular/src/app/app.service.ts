import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  clientList: Person[];

  mock: Person[] = [
    {
      name: 'Allan Phillipe Grimes Pereira',
      phone: 13981095033,
      cpf: '40955193800'
    },
    {
      name: 'teste2',
      phone: 22222222333333333333,
      cpf: '22222222222'
    },
    {
      name: 'teste3',
      phone: 3333333,
      cpf: '44444444444'
    },
    {
      name: 'Allan Phillipe Grimes Pereira',
      phone: 13981095033,
      cpf: '15851070927'
    },
    {
      name: 'Allan Phillipe Grimes Pereira',
      phone: 13981095033,
      cpf: '5535757678684851070927'
    }
  ];

  constructor() {
    this.clientList = this.mock //apagar no final
  }



}
