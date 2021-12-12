import { Component, OnInit } from '@angular/core';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  orders = [];
  barChartData = [];
  barChart;
  nbrs ;
  products;
  pourcentages ;
  categories;
  detailProducts;
  public barChartLabels = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  //public barChartType = 'bar';
  public barChartLegend = true;

  /*public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];*/
  /*public barChartData = [
    {data: this.List1 , label: 'Series A'},
    {data: [], label: 'Series B'}
  ]*/

  
 // public doughnutChartType = 'doughnut';

  constructor(private productService : ProductService ) {}

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      this.barChartLabels = this.products;
    } 
    ) ;
    

    this.productService.getCategories().subscribe(
      (data)=> {
        this.categories=data;
      console.log(this.categories=data)
      this.barChartLabels = this.categories;
    } 
    ) ;
    this.productService.getNbrsProdByCateg().subscribe(
      (data)=> {
        this.nbrs=data;
      console.log(this.nbrs=data)
      this.barChart= this.nbrs;
    } 
    ) ;
    this.productService.getPourcentageProdByCateg().subscribe(
      (data)=> {
        this.pourcentages=data;
      console.log(this.pourcentages=data)
      this.barChartData = [{data: this.pourcentages , label : 'percentage of products by category in%' },
      {data: this.barChart, label: 'products number by category'}]  ;
    } 
    ) ;
    
  

   
  

    this.orders = [
      {
        id: 'e5dcdfsf',
        orderBy: 'Dean Lynch',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: 'complated',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Lynch Dean',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: 'pending',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Lynch Dean',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: 'rejected',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Dean Lynch',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: 'initialized',
        price: 2145.0
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Dean Lynch',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: 'complated',
        price: 2145.0
      }
    ];
  }
}
