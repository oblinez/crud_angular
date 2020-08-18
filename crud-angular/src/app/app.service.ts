import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  personList: Person[] = [];

  constructor() {
  }
}
