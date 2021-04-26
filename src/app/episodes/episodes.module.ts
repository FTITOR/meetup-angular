import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesService } from './episodes.service';
import { EpisodesComponent } from './episodes.component';
import { RouterModule, Routes } from '@angular/router';
import { EpisodePipeModule } from '../pipes/episode.pipe.module';

export const ROUTES: Routes = [
  { path: '', component: EpisodesComponent }
];


@NgModule({
  declarations: [
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    EpisodePipeModule
  ],
  providers: [
    EpisodesService
  ]
})
export class EpisodesModule { }
