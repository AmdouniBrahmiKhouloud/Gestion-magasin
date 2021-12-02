import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
 product : Product = new Product();

 userFile ;
 public imagePath ;
 imgURL: any;
 public message: string;
  constructor( private productService: ProductService, private route: Router) { }
  //get f (){ return this.productService.}
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
    this.goToProductList();
  }

  saveProduct(){

    this.product.image('file',this. userFile);
  

    this.productService.addProduct(this.product).subscribe( data => 
      {console.log(data);},
     error => console.error());
       
  }
  goToProductList(){
    this.route.navigate(['/dashboard/product-list']);
  }
 
  onSelectFile(event){
    if(event.target.files.length > 0)
    { const file = event.target.files[0];
    this.userFile = file ; 
    //this.f['profile'].setValue(file);
    var mimeType = event.target.files[0].type ;
    if(mimeType.match(/image\/*/) == null)
    {this.message = "Only imagages are supported.";
    return;
     }
     var reader = new FileReader();
     this.imagePath = file ;
     reader.readAsDataURL(file);
     reader.onload = (event) => {
       this.imgURL = reader.result;
     }
     }
    }



    



}
