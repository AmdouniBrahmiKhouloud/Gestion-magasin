import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { toNumbers } from '@angular/compiler-cli/src/diagnostics/typescript_version';
import { formatDate } from '@angular/common';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {
  user:User= new User();
  date:String;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(typeof localStorage.getItem('loggedUserId'));

    console.log(toNumbers(localStorage.getItem('loggedUserId'))[0]);
    /*this.userService.getClientById(toNumbers(localStorage.getItem('loggedUserId'))[0]).subscribe((res)=>{
      this.user.idClient=res.idClient;
      this.user.nom=res.nom;
      this.user.prenom=res.prenom;
      this.user.email=res.email;
      this.user.categorieClient=res.categorieClient;
      this.user.dateNaissance=res.dateNaissance;
      this.user.profession=res.profession;
      this.user.password=res.password;
    });*/
    this.user.prenom=localStorage.getItem("loggedUserFirstName");
    this.user.nom=localStorage.getItem("loggedUserLastName");
    this.user.email=localStorage.getItem("loggedUserEmail");
    this.user.categorieClient=localStorage.getItem("loggedUserAccountCategory");
    //this.user.dateNaissance=localStorage.getItem("loggedUserBirthDate");
    this.date=localStorage.getItem("loggedUserBirthDate");
    this.user.profession=localStorage.getItem("loggedUserProfession");

  }

}
