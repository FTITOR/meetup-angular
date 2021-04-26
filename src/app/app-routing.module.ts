import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ROUTING -> Definición de rutas principales (rutas raiz) utilizando "Lazy Loading" para cargar un modulo en concreto
const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'user-list', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule) },
  { path: 'user-detail', loadChildren: () => import('./user-detail/user-detail.module').then(m => m.UserDetailModule) },
  { path: 'episodes', loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule) }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES) // ROUTING -> Agregar nuestras rutas al RouterModule (clase propia de angular), **NOTA: RUTAS RAIZ
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
