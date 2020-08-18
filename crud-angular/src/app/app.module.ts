import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { AddPersonPopupComponent } from './add-person-popup/add-person-popup.component';
import { InfoPersonPopupComponent } from './info-person-popup/info-person-popup.component';
import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { DeletePersonPopupConfirmationComponent } from './delete-person-popup-confirmation/delete-person-popup-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonPopupComponent,
    InfoPersonPopupComponent,
    PhonePipe,
    CpfPipe,
    DeletePersonPopupConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
