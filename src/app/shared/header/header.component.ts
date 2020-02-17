import { Component, OnInit } from '@angular/core';
import { InfopagesService } from '../../services/infopages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: InfopagesService,
              private router: Router) { }

  ngOnInit() {
  }

  searchProduct( term: string ) {

    if (term.length < 1) {
      return;
    }

    this.router.navigate(['/search', term]);
  }

}
