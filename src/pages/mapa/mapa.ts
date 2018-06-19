import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  lat: number;
  lng: number;


  constructor( public navParams: NavParams,
               private viewCtrl: ViewController ) {

     this.lat = 24.5592665;
     this.lng = -104.6587821;

    let coordsArray = this.navParams.get("coords").split(",");

    this.lat = Number( coordsArray[0].replace("geo:","") );
    this.lng = Number( coordsArray[1] );


    console.log(  this.lat, this.lng );

  }


  cerrar_modal(){
    this.viewCtrl.dismiss();
  }


}
