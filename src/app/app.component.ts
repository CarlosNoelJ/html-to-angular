import { Component } from '@angular/core';
import { InfopagesService } from './services/infopages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( public infopageservice: InfopagesService ) {

  }
}
