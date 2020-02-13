import { Component, OnInit } from '@angular/core';
import { InfopagesService } from '../../services/infopages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public infoService: InfopagesService) { }

  ngOnInit() {
  }

}
