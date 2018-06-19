import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private memberService: MemberService) { }

  lForm: FormGroup = new FormGroup({
  	username: new FormControl(null,[Validators.required]),
	  password: new FormControl(null,[Validators.required,Validators.minLength(6)])	
  });

  ngOnInit() {
  }

  check(message) {
    if(message.username == "admin") return true;
    else false;
  }

  onSubmit() {
  	this.memberService.postLogin(JSON.stringify(this.lForm.value)).subscribe(
  		(message) => {
        if(this.check(message)) {
          this.router.navigate(['admin']);
        }
  			else this.router.navigate(['user']);
  		},
  		(err) => {
  			console.log(err);
        alert('Invalid Username or Password');
  		} 
  	);  	
  }
}