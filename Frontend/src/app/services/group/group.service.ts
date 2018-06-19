import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  url: string = 'http://127.0.0.1:3000/users';

  tempGroup: Group = new Group();
  tempAllGroup: Group[] = [];

  postTempGroup(id, gName) {
  	this.tempGroup._id = id;
  	this.tempGroup.groupName = gName;
  	return this.http.post(this.url+'/tempcreategroup', this.tempGroup, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  getAllTempGroup() {
   return this.http.get(this.url+'/getalltempgroup', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    }); 
  }

}
