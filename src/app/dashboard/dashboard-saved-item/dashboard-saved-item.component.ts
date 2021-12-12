import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import { ProductService } from 'src/app/services/product.service';
import { productsDB } from 'src/app/shared/data/products';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NotificationsService } from 'angular2-notifications';
import Swal from 'sweetalert2';
@Component({
  selector: 'll-dashboard-saved-item',
  templateUrl: './dashboard-saved-item.component.html',
  styleUrls: ['./dashboard-saved-item.component.scss']
})
export class DashboardSavedItemComponent implements OnInit {
  p:number = 1;
  view = 'list';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  products;
  postPerPage
  pageNumber
  detailProducts;
  constructor(public productService:ProductService , private route : Router , private detailProductService : DetailProductService
    ) {}
  
  definedUrl = this.productService.url+'Imgproduits/';
 
  ngOnInit(): void {
    //this.products.paginator = this.paginator;
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe(data =>
          { console.log(data);
            this.getProducts()
          } )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
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
    showProduct(id:number){
      this.route.navigate(['/dashboard/show-produit',id]);
    }
    deleteDetailProduct(id:number){
          Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.detailProductService.deleteDetailProduct(id).subscribe(data =>
            { console.log(data);
              this.getDetailProducts()
            } )
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

     
    }
   

    
}
