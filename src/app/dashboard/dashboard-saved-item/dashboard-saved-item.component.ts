import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { productsDB } from 'src/app/shared/data/products';

@Component({
  selector: 'll-dashboard-saved-item',
  templateUrl: './dashboard-saved-item.component.html',
  styleUrls: ['./dashboard-saved-item.component.scss']
})
export class DashboardSavedItemComponent implements OnInit {
  view = 'list';

  products;
  constructor(private productService:ProductService  ) {}

  ngOnInit(): void {
    this.products = productsDB.Product;
    this.productService.getListProduct().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      }
    )
  }
}
