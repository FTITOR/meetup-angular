import { Injectable } from '@angular/core';
import { USERS } from '../data';
import { UserDetail } from './user-detail.model';

// @Injectable() es un decorador de clase. Los "service" de angular deben de tener este decorador
// para poder ser injectados en los module donde se van a implementar.
@Injectable()
export class UserDetailService {

  constructor() { }

  // Metodo publico que regresa un objeto de "UserDetail", donde "UserDetail" es una interface con atributos definidos.
  getUserDetail(id: number): UserDetail {
    return USERS.find(u => id === u.id);;
  }
}
