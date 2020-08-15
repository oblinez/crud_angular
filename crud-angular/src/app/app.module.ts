import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPersonPopupComponent } from './add-person-popup/add-person-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
