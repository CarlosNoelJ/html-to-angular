import { Component, OnInit } from '@angular/core';
import { InfopagesService } from '../../services/infopages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: InfopagesService) { }

  ngOnInit() {
  }

}
