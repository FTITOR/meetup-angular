import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListService } from './user-list.service';

// ROUTING -> Definición de rutas "CHILD" para cargar especificamente el componente UserListComponent.
export const ROUTES: Routes = [
  { path: '', component: UserListComponent }
];

@NgModule({
  declarations: [
    UserListComponent // COMPONENT -> Declaración del componente perteneciente al module.
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)  // ROUTING -> Agregar nuestras rutas al RouterModule.forChild (clase propia de angular), **NOTA: RUTAS ANIDADAS.
  ],
  providers: [
    UserListService // SERVICE ->  Inyección del service para poder usarlo en el component.
  ]
})
export class UserListModule { }
