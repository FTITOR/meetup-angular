import { Component, OnInit } from '@angular/core';
import { Episode, Episodes } from './episodes.model';
import { EpisodesService } from './episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: Array<Episode>;

  constructor(
    private episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes()
    .then((res: Episodes) => this.episodes = res.results)
    .catch(e => console.error(e));
  }

}
