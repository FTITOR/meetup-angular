import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListService } from './user-list.service';

// Definición de rutas "CHILD" para cargar especificamente el componente UserListComponent.
export const ROUTES: Routes = [
  { path: '', component: UserListComponent }
];

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)  // Agregar nuestras rutas al RouterModule.forChild (clase propia de angular), **NOTA: RUTAS ANIDADAS.
  ],
  providers: [
    UserListService
  ]
})
export class UserListModule { }
