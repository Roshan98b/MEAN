import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../../services/member/member.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private memberService: MemberService, private userService: UserService) {
  	this.memberService.auth().subscribe(
      (data) => {
        this.router.navigate(['user']);
      },
      (err) => {
        
      }
    );
  }

  ngOnInit() {
  }

}
