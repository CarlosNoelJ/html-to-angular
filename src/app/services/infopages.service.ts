import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopagesService {

  info: InfoPage = {};
  cargada = false;
  team: any[] = [];

  constructor( private http: HttpClient) {
  this.uploadInfo();
  this.uploadTeam();
  }

  private uploadInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private uploadTeam() {
    this.http.get('https://angular-html-891f0.firebaseio.com/team.json')
      .subscribe( (resp: any[]) => {
        this.team = resp;
        console.log(resp);
      });
  }
}
