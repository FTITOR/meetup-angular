import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: UserListComponent }
];

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UserListModule { }
