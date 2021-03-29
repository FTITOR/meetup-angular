import { Injectable } from '@angular/core';
import { USERS } from '../data';
import { UserDetail } from '../user-detail/user-detail.model';

// @Injectable() es un decorador de clase. Los "service" de angular deben de tener este decorador
// para poder ser injectados en los module donde se van a implementar.
@Injectable()
export class UserListService {

  constructor() { }

  // Metodo publico que regresa una LISTA (Array) de "UserDetail", donde "UserDetail" es una interface con atributos definidos.
  getUsers(): Array<UserDetail> {
    return USERS;
  }

}
