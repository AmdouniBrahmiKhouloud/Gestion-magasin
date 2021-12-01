import { Component, OnInit } from '@angular/core';
import { menuList } from '../../data/menus';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user';

@Component({
  selector: 'll-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navList = [];
  constructor() { }

  ngOnInit(): void {
    this.navList = menuList;


  }

}
