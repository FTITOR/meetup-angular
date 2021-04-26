import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EpisodesService {

  constructor(private http: HttpClient) { }

  getEpisodes() {
    return this.http.get('https://rickandmortyapi.com/api/episode').toPromise();
  }
}
