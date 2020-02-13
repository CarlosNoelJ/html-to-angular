import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopagesService {

  info: InfoPage = {};
  cargada = false;

  constructor( private http: HttpClient) {

  // Read JSON file
  this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }
}
