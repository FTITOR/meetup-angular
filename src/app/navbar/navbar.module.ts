import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent // COMPONENT -> Declaración del component perteneciente al module (NavbarComponent).
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent // COMPONENT -> Exportar NavbarComponent para poder usarlo en otros modules.
  ]
})
export class NavbarModule { }
