import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';

// @Injectable() es un decorador de clase. Los "service" de angular deben de tener este decorador
// para poder ser injectados en los module donde se van a implementar.
@Injectable()
export class UserDetailService {

  constructor() { }

  // Metodo publico que regresa un objeto de "UserDetail", donde "UserDetail" es una interface con atributos definidos.
  getUserDetail(): UserDetail {
    return USER;
  }
}


export const USER: UserDetail = {
  id: 3, name: 'ROGER', lastname: 'WATERS', email: 'test2@test.com', age: 72
}
