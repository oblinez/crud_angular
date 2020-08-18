import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class AppService {

/*   openClosePopupAddPerson: boolean = false;
  openClosePopupInfoPerson: boolean = false; */

  // arrayN: number
  // personToDelete: Person
  // personToEdit: Person

  personList: Person[] = [];

  constructor() {
  }

  // addPerson(person: Person) {
  //   this.personList.push(person);
  // }

  // deletePerson() {
  //   // this.personList = this.personList.filter((value, i) => (i != this.personListIndex))
  //   this.personList = this.personList.filter((value) => (JSON.stringify(value) == JSON.stringify(this.personToDelete)))
  // }
}
