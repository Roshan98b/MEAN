import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User = new User();

}
