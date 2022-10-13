import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  uri:string='https://api.spotify.com/v1/artists/1cXi8ALPQCBHZbf0EgP4Ey/top-tracks?market=us';

  token:string='Bearer BQCoHqenK2yzLOY3hX3x2GMY8iCJG2ArrWW4wZsxjSnZ6QJCs1xTwKThd0236ftWsOBJR2SVq7dunf1lbHZwk2J2A0yBqTqYFLZcukcrOiztQSp2kgMD3twMUh5R77A1QthQ2f-uYC9vgNZzKZZGmz1zggy01VRNULZ2xNTNOF4h4mUafnEPfot1Whtdz88wgr8';




  constructor(public peticion : HttpClient) { 
    console.log("Arrancando el servicio")

  }
  public traercanciones():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
      
        Authorization: this.token
      })
    };
   
    return this.peticion.get(this.uri,httpOptions);
  }

}
