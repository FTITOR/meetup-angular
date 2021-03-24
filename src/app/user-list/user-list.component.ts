import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: Array<User>;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {}

}
