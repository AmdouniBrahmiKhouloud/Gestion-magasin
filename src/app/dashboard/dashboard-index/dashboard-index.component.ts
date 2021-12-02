import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  list: User[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllClient().subscribe(res => this.list=res);
  }

  delete(user: User) {
    let i = this.list.indexOf(user);
    this.userService.deleteClient(user.idClient).subscribe(()=>this.list.splice(i,1)
    )
  }
}
