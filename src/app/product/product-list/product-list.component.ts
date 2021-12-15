import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Product } from 'src/app/model/product';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import { ProductService } from 'src/app/services/product.service';
import { productsDB } from '../../shared/data/products';
import {FactureService} from '../../services/facture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  libelle:any;
  term:any;
  isLoaded: boolean;
 advanceSearchExpanded: boolean = false;
 //products : Product[];
 view = 'list';
 products;
 definedUrl = this.productService.url+'Imgproduits/';


  constructor(private productService : ProductService, private route : Router) {}

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
  showProduct(id:number){
    this.route.navigate(['/products/detail-produit',id]);
  }
  displayAsc(){
    this.productService.getListProductAsc().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      }
    )
  }
  displayDesc(){
    this.productService.getListProductDesc().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      }
    )
  }
  displayByCat1(){this.productService.getListProductAlimentaire().subscribe(
    (data)=> {
      this.products=data;
    console.log(this.products=data)
    }
  )}
  displayByCat2(){this.productService.getListProductElectromeanager().subscribe(
    (data)=> {
      this.products=data;
    console.log(this.products=data)
    }
  )}
  displayByCat3(){this.productService.getListProductQuincaillerie().subscribe(
    (data)=> {
      this.products=data;
    console.log(this.products=data)
    }
  )}
  CategoryChoice(value:string){
    switch(value) {
      case "mod1":
         this.displayByCat1();
         break;
      case "mod2":
        this. displayByCat2();
         break;
         case "mod3":
          this.displayByCat3();
           break;

    }
  }

  modo(value: string){
    switch(value) {
      case "mod1":
         this.displayAsc();
         break;
      case "mod2":
        this.displayDesc();
         break;

    }
  }
  Search(){
    if(this.libelle == ""){
      this.ngOnInit();

    }else{
      this.products=this.products.filter(res =>{return res.libelle.toLocaleLowerCase().match(this.libelle.toLocaleLowerCase())});
    }
  }




}
