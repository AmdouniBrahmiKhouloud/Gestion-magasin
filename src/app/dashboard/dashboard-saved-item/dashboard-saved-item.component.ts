import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailProductService } from 'src/app/services/detailProduit.service';
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
  detailProducts;
  constructor(private productService:ProductService , private route : Router , private detailProductService : DetailProductService) {}

  ngOnInit(): void {
    this.products = productsDB.Product;
    this.productService.getListProduct().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      }
    ) ;
   this.detailProductService.getListDetailProducts().subscribe(
      (data)=> {
        this.detailProducts=data;
      console.log(this.detailProducts=data)
      }
    ) ;
  }
  private getProducts()
  {
    this.productService.getListProduct().subscribe(
      (data)=> {
        this.products=data; });
  }
  updateProduct(id:number){
  this.route.navigate(['/dashboard/update-product',id]);
  //this.route.navigate(['/dashboard/product-list']);
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data =>
      { console.log(data);
        this.getProducts()
      } )
  }
  private getDetailProducts()
  {
    this.detailProductService.getListDetailProducts().subscribe(
      (data)=> {
        this.detailProducts=data; });
  }
  updateDetailProduct(id:number){
    this.route.navigate(['/dashboard/update-detail-produit',id]);
   
    }
    deleteDetailProduct(id:number){
      this.detailProductService.deleteDetailProduct(id).subscribe(data =>
        { console.log(data);
          this.getDetailProducts()
        } )
    }
}
