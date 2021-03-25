import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../user-detail/user-detail.model';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: Array<UserDetail>;

  constructor(private userListService: UserListService) {
    this.users = this.userListService.getUsers(); 
  }

  ngOnInit(): void {}

}
