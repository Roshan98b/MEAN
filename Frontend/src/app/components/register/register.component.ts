import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private memberService: MemberService) { }

  rForm: FormGroup = new FormGroup({
  	firstname: new FormControl(null),
  	lastname: new FormControl(null),
  	age: new FormControl(null,[Validators.min(0)]),
  	email: new FormControl(null,[Validators.email,Validators.required]),
  	contactno: new FormControl(null,[Validators.minLength(10),Validators.maxLength(10),Validators.required]),
  	gender: new FormControl(),
  	username: new FormControl(null,[Validators.required]),
  	password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
  	cpassword: new FormControl(null,[Validators.required])
  });

  ngOnInit() {
  }

  onSubmit() {
  	this.memberService.addMember(JSON.stringify(this.rForm.value)).subscribe(
  		(message) => {
  			console.log(message);
  			this.router.navigate(['login']);
  		},
  		(err) => {
  			console.log(err);
  		} 
  	);
  }

}
