import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HighlightDirectiveModule } from '../directives/highlight.directive.module';

@NgModule({
  declarations: [
    FooterComponent // COMPONENT -> Declaración del component perteneciente al module (FooterComponent).
  ],
  imports: [
    CommonModule,
    HighlightDirectiveModule
  ],
  exports: [
    FooterComponent // COMPONENT -> Exportar FooterComponent para poder usarlo en otros modules.
  ]
})
export class FooterModule { }
