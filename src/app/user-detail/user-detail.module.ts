import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailService } from './user-detail.service';

// Definición de rutas "CHILD" para cargar especificamente el componente UserDetailComponent.
const ROUTES: Routes = [
  {path: '', component: UserDetailComponent}
];
@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES) // Agregar nuestras rutas al RouterModule.forChild (clase propia de angular), **NOTA: RUTAS ANIDADAS.
  ],
  providers: [
    UserDetailService
  ]
})
export class UserDetailModule { }
