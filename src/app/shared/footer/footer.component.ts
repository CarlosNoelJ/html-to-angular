import { Component, OnInit } from '@angular/core';
import { InfopagesService } from 'src/app/services/infopages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  constructor(public service: InfopagesService) { }

  ngOnInit() {
  }

}
