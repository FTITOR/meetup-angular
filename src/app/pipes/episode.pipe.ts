import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episode'
})
export class EpisodePipe implements PipeTransform {

  transform(param: string): string {
    const value = param.split('');
    const seasson: number = Number(value[1] + value[2]);
    const episode: number = Number(value[4] + value[5]);
    return `Seasson ${seasson}-Episode ${episode}`;
  }

}
