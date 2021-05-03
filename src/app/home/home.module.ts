import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirectiveModule } from '../directives/highlight/highlight.directive.module';

// Definición de rutas "CHILD" para cargar especificamente el componente HomeComponent.
const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HighlightDirectiveModule,
    RouterModule.forChild(ROUTES)  // Agregar nuestras rutas al RouterModule.forChild (clase propia de angular), **NOTA: RUTAS ANIDADAS.
  ],
  exports: [
  ]
})
export class HomeModule { }
