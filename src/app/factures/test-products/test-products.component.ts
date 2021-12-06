import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {FactureService} from '../../services/facture.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-test-products',
  templateUrl: './test-products.component.html',
  styleUrls: ['./test-products.component.scss']
})
export class TestProductsComponent implements OnInit {

  listProducts: Product[] ;
  constructor(private factureService: FactureService, private route: Router) {

  }

  ngOnInit(): void {
    this.listProducts = [{
        id : '1',
        title : 'item 1',
        price : 15 ,
        description : 'desdqdq qdqsdq ',
        picture : 'png.png'
      },
      {
        id : '2',
        title : 'item 2',
        price : 30 ,
        description : 'desdqdq qdqsdq ',
        picture : 'png.png'
      },
      {
        id : '3',
        title : 'item 3',
        price : 40 ,
        description : 'desdqdq qdqsdq ',
        picture : 'png.png'
      },

    ] ;
  }

  addItemToCard(product: Product): void {
    this.factureService.addItem(product) ;
    this.route.navigate(['/dashboard/orders']) ;
  }

}
