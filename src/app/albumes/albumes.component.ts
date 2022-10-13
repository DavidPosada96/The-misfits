import { Component} from '@angular/core';
import { SpotyService } from '../services/spoty.service';
import {TopService }   from '../services/top.service';


@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent  {

  public canciones:any[]=[]



  constructor(public peticion:SpotyService) {

    this.peticion.traercanciones()
    .subscribe(respuesta =>{
      console.log("respuesta")
      this.canciones=respuesta.tracks
      console.log(this.canciones)

    })

  }

}
