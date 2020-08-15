import { AppService } from './app.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clients: any[]

  constructor(private AppService: AppService) {
    this.clients = AppService.clients


  }
}
