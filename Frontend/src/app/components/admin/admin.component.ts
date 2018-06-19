import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService, private router: Router) {
    this.memberService.auth().subscribe(
    	(data) => {
    		console.log(data);
    	},
    	(err) => {
    		this.router.navigate(['login']);
    	}
    );
  }

  ngOnInit() {
  }

  logout() {
  	this.memberService.logout().subscribe(
  		(data) => {
  			console.log(data);
  			this.router.navigate(['login']);
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  }

}
