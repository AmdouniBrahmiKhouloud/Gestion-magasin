import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Chart } from 'chart.js';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  list: User[] = [];
  accountCategory: string;
  p:number = 1;
  constructor(private userService: UserService) {}
  data:number[]=[];
  dataAccount:number[]=[];
  ngOnInit(): void {
    this.userService.getAllClient().subscribe(res => this.list=res);
    this.userService.getPremuim().subscribe(res=>{this.data.push(res)});
    this.userService.getOrdinaire().subscribe(res=>{this.data.push(res)});
    this.userService.getFidele().subscribe(res=>{
      this.data.push(res);
      console.log(this.data);
      let myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: ['Premuim', 'ordinaire', 'fidele'],
          datasets: [{
            label: 'Account Category',
            data: this.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
    this.userService.getActivateAccount().subscribe(res=>this.dataAccount.push(res));
    this.userService.getDesactivateAccount().subscribe(res=>{
      this.dataAccount.push(res);
      console.log(this.dataAccount);
      new Chart('chart', {
        type: 'doughnut',
        data: {
          labels: [
            'Account activate',
            'Account desactivate'
          ],
          datasets: [{
            label: 'Activate Account',
            data: this.dataAccount,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)'
            ]
          }]
        }
      });
    })
    new Chart('chartProfession', {
      type: 'polarArea',
      data: {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      }
    });
  }

  delete(user: User) {
    let i = this.list.indexOf(user);
    this.userService.deleteClient(user.idClient).subscribe(()=>this.list.splice(i,1)
    )
  }

  search() {

    if (this.accountCategory === ""){
      this.ngOnInit()
    }else {
     // console.log(this.accountCategory)
      this.list = this.list.filter((res )=>{
        console.log("i'am search")
        return res.categorieClient.toLocaleLowerCase().includes(this.accountCategory.toLocaleLowerCase());
      })
    }
  }

  key ='firstName'
  reverse : boolean = false
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;

  }
}
