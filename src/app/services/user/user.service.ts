import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Array<User> {
    return [
      {name: 'Juan', lastname: 'Perez', age: 20},
      {name: 'Alberto', lastname: 'Juarez', age: 23},
      {name: 'Monica', lastname: 'Lopez', age: 21},
      {name: 'Juan', lastname: 'Perez', age: 20},
      {name: 'Alberto', lastname: 'Juarez', age: 23},
      {name: 'Monica', lastname: 'Lopez', age: 21},
      {name: 'Juan', lastname: 'Perez', age: 20},
      {name: 'Alberto', lastname: 'Juarez', age: 23},
      {name: 'Monica', lastname: 'Lopez', age: 21},
      {name: 'Juan', lastname: 'Perez', age: 20},
      {name: 'Alberto', lastname: 'Juarez', age: 23},
      {name: 'Monica', lastname: 'Lopez', age: 21}
    ];
  }

  getUser(name: string): User {
    return {name: 'Monica', lastname: 'Lopez', age: 21};
  }
}

export interface User {
  name: string;
  lastname: string;
  age: number;
}
