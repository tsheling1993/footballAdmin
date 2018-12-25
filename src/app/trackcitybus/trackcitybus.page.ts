import { Component, OnInit } from '@angular/core';
import { Map } from 'leaflet';
import * as leaflet from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import { AlertController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-trackcitybus',
  templateUrl: './trackcitybus.page.html',
  styleUrls: ['./trackcitybus.page.scss'],
})
export class TrackcitybusPage implements OnInit {
  mapc: Map;
  latitude:any;
  longitude:any;
  constructor(private route: ActivatedRoute,
    private alertCtrl:AlertController,
    private menu: MenuController) {
    this.latitude=this.route.snapshot.params['latitude'];
    this.longitude=this.route.snapshot.params['longitude'];
    console.log("lat and long="+this.latitude+" "+this.longitude);

   }

  ngOnInit() {
    this.loadMap();
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  loadMap()
  {
    this.mapc=leaflet.map("mapc").setZoom(17,{animate:true,duration:0.5});//.panTo([this.latitude,this.longitude]);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.mapc);
    this.mapc.locate({
      setView: true,
      maxZoom: 20,
    }).on('locationfound', e => {
      let marker=leaflet.marker([this.latitude,this.longitude]).on('click',()=>
    {
        this.alert("Info","Your Location");
    });
      let markerGroup=leaflet.featureGroup();
      markerGroup.addLayer(marker);
      this.mapc.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err);
    })
  }
  async alert(header:any,message:any)
  {
    const alert= await this.alertCtrl.create(
      {
       header:header,
       message:message,
       buttons:['OK'], 
      }
    );
    alert.present();
  }
}
