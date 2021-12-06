import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  constructor(private builder: FormBuilder, private userService: UserService, private recService: ReclamationService) {}
  form: FormGroup;
  reclamation = new Reclamation();
  userName;
  loggedUserEmail;
  idconnectedUser;

  formfourni = this.builder.group({
    detail: ['', Validators.required]
  });

  ngOnInit(): void {
    this.userName = localStorage.getItem('loggedUserLastName') + ' ' + localStorage.getItem('loggedUserFirstName');
    this.loggedUserEmail = localStorage.getItem('loggedUserEmail');
    this.idconnectedUser = localStorage.getItem('loggedUserId');
  }

  addreclamation(formfourni) {
    this.userService.getClientById(this.idconnectedUser).subscribe(data => {
      this.reclamation.detail = formfourni.value.detail;
      this.reclamation.sender = data;
      this.reclamation.date = new Date();

      this.recService.addreclamation(this.reclamation).subscribe(data => {
        console.log('done recla');
      });
    });
  }
}
