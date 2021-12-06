import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import {FactureService} from '../../services/facture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded = false;
  products = [];
  numberOfProducts: any;
  constructor(private factureService: FactureService , private route: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.factureService.getProductsForTesting().subscribe(data => this.products = data) ;
      this.isLoaded = true ;
      this.numberOfProducts = this.factureService.listItems.length ;
    }, 0) ;
  }

  addItemToCard(product: any): void {
    console.log(product) ;
    this.factureService.addItem(product);
    this.numberOfProducts = this.factureService.listItems.length ;

  }

  goToOders(): void{
    this.route.navigate(['/dashboard/orders']) ;
  }
}
