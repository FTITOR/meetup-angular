import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';

@Injectable()
export class UserDetailService {

  constructor() { }

  getUserDetail(): UserDetail {
    return USER;
  }
}


export const USER: UserDetail = {
  id: 3, name: 'ROGER', lastname: 'WATERS', email: 'test2@test.com', age: 72
}
