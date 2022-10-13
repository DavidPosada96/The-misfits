import { Component} from '@angular/core';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

      integrantes:any[]=[
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/MICHALEGRAVES1.jpg?alt=media&token=7296ddab-64d3-4b61-b4dc-ead2da79efad",
      "nombre":"Michale Graves",
      "instrumento":"Voz, Dumont, Nueva Jersey el 21 de marzo de 1975.",
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/The_Misfits_Scream_V_deo_musical-353654422-large.jpg?alt=media&token=d82cdacc-9bf5-4e69-8e1a-5438ce5fb2c4",
      "nombre":"Dr. Chud",
      "instrumento":"Bateria, Lodi, Nueva Jersey, 4 de abril de 1964.",
    },

    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/jerry%20only.jpg?alt=media&token=c76c8559-4b9c-4005-9320-c40014fa9763",
      "nombre":"Jerry Only",
      "instrumento":"Bajo, Lodi, Nueva Jersey, 21 de abril de 1959.",

    },

    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/fotos-misfits.appspot.com/o/Doyle%20Wolfgang%20von%20Frankenstein.jpg?alt=media&token=d1116df0-f96d-4020-a1c5-b4d48933fcfc",
      "nombre":"Doyle Wolfgang von Frankenstein",
      "instrumento":"Guitarra, Lodi, Nueva Jersey, 15 de septiembre de 1964.",
    },


  ]


  constructor() { }



}
