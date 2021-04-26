import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodePipe } from './episode.pipe';

@NgModule({
  declarations: [
    EpisodePipe
  ],
  exports: [
    EpisodePipe
  ],
  imports: [
    CommonModule
  ]
})
export class EpisodePipeModule { }
