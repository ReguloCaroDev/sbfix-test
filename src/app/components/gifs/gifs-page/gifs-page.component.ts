import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styles: [
  ]
})
export class GifsPageComponent  {

  get historial() {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService  ) { }

  buscar( termino: string ) {
    this.gifsService.buscarGifs( termino );
  }

}
