import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private _appService: AppService

  persons: Person[] = []

  openClosePopupAddPerson: boolean = false;
  openClosePopupInfoPerson: boolean = false;
  openClosePopupDeletionConfirmationPerson: boolean = false;

  personListIndex: number

  personToDelete: Person
  personToEdit: Person

  constructor(private AppService: AppService) {
    // this.persons = AppService.personList
    this._appService = this.AppService;
  }

  ngOnInit()  {
    this.updatePersonList()
  }

  openInfoPopup(person: Person) {
    this.personToEdit = person
    this.openClosePopupInfoPerson = true
  }

  openExcludePopup(person: Person) {
    this.personToDelete = person
    this.openClosePopupDeletionConfirmationPerson = true;
    /* this.persons = this.persons.filter((value, i) => (i !== index)) */
  }

  openAddPopup() {
    this.openClosePopupAddPerson = true
  }

  updatePersonList(){
    this._appService.personList = this.persons
  }


  addPerson(person: Person) {
    this.persons.push(person);
  }

  deletePerson() {
    // this.personList = this.personList.filter((value, i) => (i != this.personListIndex))
    this.persons = this.persons.filter((value) => (JSON.stringify(value) != JSON.stringify(this.personToDelete)))
  }
}
