import { Component, OnInit } from '@angular/core'

import { AppService } from './app.service'
import { Person } from './person'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private _appService: AppService

  persons: Person[] = []

  openClosePopupAddPerson: boolean = false
  openClosePopupInfoPerson: boolean = false
  openClosePopupDeletionConfirmationPerson: boolean = false

  personListIndex: number

  personToDelete: Person
  personIndexToEdit: number

  constructor(private AppService: AppService) {
    this._appService = this.AppService
  }

  ngOnInit() {
    this.updatePersonList()
  }

  openInfoPopup(person: Person, index: number) {
    this.personIndexToEdit = index
    this.openClosePopupInfoPerson = true
  }

  openExcludePopup(person: Person) {
    this.personToDelete = person
    this.openClosePopupDeletionConfirmationPerson = true
  }

  openAddPopup() {
    this.openClosePopupAddPerson = true
  }

  updatePersonList() {
    this._appService.personList = this.persons
  }

  addPerson(person: Person) {
    this.persons.push(person)
  }

  deletePerson() {
    this.persons = this.persons.filter((value) => (JSON.stringify(value) != JSON.stringify(this.personToDelete)))
  }
}
