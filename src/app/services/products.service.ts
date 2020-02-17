import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true;
  productos: Producto[] = [];
  filterProduct: Producto[] = [];

  constructor( private http: HttpClient) {
    this.uploadProducts();
  }

  private uploadProducts() {

    return new Promise( (resolve, reject ) => {
      this.http.get('https://angular-html-891f0.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });
  }

  getProduct( id: string) {
    return this.http.get(`https://angular-html-891f0.firebaseio.com/productos/${ id }.json`);
  }

  searchProduct(term: string) {

    if (this.productos.length === 0) {
      this.uploadProducts().then( () => {
      this.filterProducts( term);
      });
    } else {
      this.filterProducts( term);
    }
  }

  private filterProducts( term: string) {
    this.filterProduct = [];
    term = term.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const titleLower =  prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf( term ) >= 0 || titleLower.indexOf( term ) >= 0) {
        this.filterProduct.push( prod );
      }
    });
  }
}
