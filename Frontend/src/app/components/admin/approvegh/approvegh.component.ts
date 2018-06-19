import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../../../services/member/member.service';
import { GroupService } from '../../../services/group/group.service';
import { Group } from '../../../services/group/group'; 

@Component({
  selector: 'app-approvegh',
  templateUrl: './approvegh.component.html',
  styleUrls: ['./approvegh.component.css']
})
export class ApproveghComponent implements OnInit {

  constructor(private memberService: MemberService, private router: Router, private groupService: GroupService) { 
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
  	this.getAllTempGroup();
  }

  getAllTempGroup() {
  	this.groupService.getAllTempGroup().subscribe(
  		(model) => {
  			this.groupService.tempAllGroup = <Group[]>model;
  			console.log("Model "+model);
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  }
}
