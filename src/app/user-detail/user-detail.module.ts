import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailService } from './user-detail.service';

// ROUTING -> Definición de rutas "CHILD" para cargar especificamente el componente UserDetailComponent.
const ROUTES: Routes = [
  {path: '', component: UserDetailComponent}
];

@NgModule({
  declarations: [
    UserDetailComponent // COMPONENT -> Declaración del componente perteneciente al module.
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES) // ROUTING -> Agregar nuestras rutas al RouterModule.forChild (clase propia de angular), **NOTA: RUTAS ANIDADAS.
  ],
  providers: [
    UserDetailService // SERVICE ->  Inyección del service para poder usarlo en el component.
  ]
})
export class UserDetailModule { }
