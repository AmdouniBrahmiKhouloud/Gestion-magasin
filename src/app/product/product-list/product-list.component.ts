import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
 advanceSearchExpanded: boolean = false;
 //products : Product[];
 view = 'list';
 products;

  constructor(private productService : ProductService) {}

 /* ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 8000)
  }*/
  ngOnInit(): void{
    /*this.productService.getListProduct().subscribe( (data : Product[]) => { console.log(data) 
    this.products = data;});*/
    this.products = productsDB.Product;
    this.productService.getListProduct().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      }
    )
  }
  
  
}
