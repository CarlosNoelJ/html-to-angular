import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from 'src/app/interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  product: ProductDescription;
  idProduct: string;

  constructor( private route: ActivatedRoute, public productService: ProductsService ) { }

  ngOnInit() {

    this.route.params
      .subscribe(parameters => {

        this.productService.getProduct(parameters.id)
          .subscribe( (product: ProductDescription) => {
              this.idProduct = parameters.id;
              this.product = product;
          });

      });

  }

}
