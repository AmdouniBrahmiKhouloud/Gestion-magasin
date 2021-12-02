import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss']
})
export class ListStockComponent implements OnInit {
  view = 'list';
  stocks;
  constructor( private stockService : StockService , private route : Router) { }

  ngOnInit(): void {
    //this.stocks = productsDB.Product;
    
    this.stockService.getListStock().subscribe(
      (data)=> {
        this.stocks=data;
      console.log(this.stocks=data)
      }
    )
  }
  updateStock(id:number){
  this.route.navigate(['/dashboard/update-stock',id]);}
  
  private getStocks()
  {
    this.stockService.getListStock().subscribe(
      (data)=> {
        this.stocks=data; });
  }

deleteStock(id:number){
  this.stockService.deleteStock(id).subscribe(data =>
    { console.log(data);
      this.getStocks()
    } )
}

}
