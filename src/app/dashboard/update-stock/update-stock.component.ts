import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {
  stock : Stock = new Stock();
  id:number;
  constructor(private stockService : StockService
    , private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.stockService.getStock( this.id).subscribe(data =>
      {this.stock = data}, error => console.log(error));
  }
  onSubmit(){
    this.stockService.updateStock(this.stock).subscribe(data => {
      this.goToProductList(); }
    , error => console.log(error));
    
    
  }
  goToProductList(){
    this.router.navigate(['/dashboard/list-stock']);
  }
}
