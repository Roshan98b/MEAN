import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MemberService } from '../../services/member/member.service';
import { UserService } from '../../services/user/user.service';
import { GroupService } from '../../services/group/group.service';
import { User } from '../../services/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private memberService: MemberService, private userService: UserService, private router: Router, private groupService: GroupService) {
    this.memberService.auth().subscribe(
      (data) => {
        this.add(data);
      },
      (err) => {
        this.router.navigate(['login']);
      }
    );
  }

  cgForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required])
  });

  ngOnInit() {
  }

  add(data) {
    this.userService.user = data;
  }

  logout() {
  	this.memberService.logout().subscribe(
  		(data) => {
  			this.router.navigate(['login']);
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  }

  onSubmitCG() {
    this.groupService.postTempGroup(this.userService.user._id, this.cgForm.value.name).subscribe(
      (message) => {
        console.log(message);
        alert('Create Group Request sent..!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
