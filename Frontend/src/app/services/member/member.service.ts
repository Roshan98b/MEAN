import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  url: string = 'http://127.0.0.1:3000/users';

  addMember(member) {
    return this.http.post(this.url+'/member', member, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  postLogin(member) {
  	return this.http.post(this.url+'/login', member, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });	
  }

  auth() {
  	return this.http.get(this.url+'/data', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });	
  }

  logout() {
  	return this.http.get(this.url+'/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });	
  }

}
