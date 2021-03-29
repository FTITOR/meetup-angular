import { Injectable } from '@angular/core';
import { UserDetail } from '../user-detail/user-detail.model';

// @Injectable() es un decorador de clase. Los "service" de angular deben de tener este decorador
// para poder ser injectados en los module donde se van a implementar.
@Injectable()
export class UserListService {

  constructor() { }

  // Metodo publico que regresa una LISTA (Array) de "UserDetail", donde "UserDetail" es una interface con atributos definidos.
  getUsers(): Array<UserDetail> {
    return Users;
  }

}


const Users: Array<UserDetail> = [
  {id: 1, name: 'FTITOR', lastname: 'RMX', email: 'test@test.com', age: 18},
  {id: 2, name: 'CEPILLIN', lastname: 'EN LA FERIA', email: 'test1@test.com', age: 75},
  {id: 3, name: 'ROGER', lastname: 'WATERS', email: 'test2@test.com', age: 72},
  {id: 4, name: 'ALAN', lastname: 'TURING', email: 'test3@test.com', age: 50},
  {id: 5, name: 'PEPITO', lastname: 'TEST', email: 'test4@test.com', age: 7}
];
