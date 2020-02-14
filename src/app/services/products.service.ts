import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) {
    this.uploadProducts();
  }

  private uploadProducts() {
    this.http.get('https://angular-html-891f0.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
      });
  }

  getProduct( id: string) {
    return this.http.get(`https://angular-html-891f0.firebaseio.com/productos/${ id }.json`);
  }
}
