import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  stock : Stock = new Stock();
  constructor(private stockService: StockService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.stock);
    this.saveStock();
    this.goToStockList();
  }

  saveStock(){

    this.stockService.addStock(this.stock).subscribe( data => 
      {console.log(data);},
     error => console.error());
       
  }
  goToStockList(){
    this.route.navigate(['/dashboard/list-stock']);
  

}
}
