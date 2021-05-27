import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form.component';
import { RouterModule, Routes } from '@angular/router';
import { UppercaseModule } from '../directives/uppercase/uppercase.directive.module';
import { ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {path: '', component: BasicFormComponent}
];

@NgModule({
  declarations: [
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    UppercaseModule,
    ReactiveFormsModule
  ]
})
export class BasicFormModule { }
