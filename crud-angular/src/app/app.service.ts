import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  clients =
  [
    {
      name: 'Allan Phillipe Grimes Pereira',
      celPhone: '13 98109 5033',
      cpf: '058.510.709-27'
    },
    {
      name: 'teste2',
      celPhone: '22222222333333333333',
      cpf: '22222222222'
    },
    {
      name: 'teste3',
      celPhone: '3333333',
      cpf: '44444444444'
    },
    {
      name: 'Allan Phillipe Grimes Pereira',
      celPhone: '13 98109 5033',
      cpf: '058.510.709-27'
    },
    {
      name: 'Allan Phillipe Grimes Pereira',
      celPhone: '13 98109 5033',
      cpf: '058.510.709-27'
    }

  ]
}
