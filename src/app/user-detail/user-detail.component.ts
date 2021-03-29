import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetail } from './user-detail.model';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: UserDetail;

  constructor(
    private userDetailService: UserDetailService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const ID = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userDetailService.getUserDetail(ID);
  }

}
