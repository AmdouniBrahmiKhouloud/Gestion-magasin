import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../model/user';
@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  user: User;
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({});
  }

}
