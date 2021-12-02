import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  product : Product = new Product();
  id:number;
  constructor(private productService : ProductService
    , private route : ActivatedRoute,
    private router : Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct( this.id).subscribe(data =>
      {this.product = data}, error => console.log(error));
  }
  onSubmit(){
    this.productService.updateProduct(this.product).subscribe(data => {
      this.goToProductList(); }
    , error => console.log(error));
    
    
  }
  goToProductList(){
    this.router.navigate(['/dashboard/product-list']);
  }
}
