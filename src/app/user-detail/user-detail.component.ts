import { Component, OnInit } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: UserDetail;

  constructor(private userDetailService: UserDetailService) {
    this.user = this.userDetailService.getUserDetail();
  }

  ngOnInit(): void {
  }

}
