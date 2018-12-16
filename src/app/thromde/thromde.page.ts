import { Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';
import { Map,Marker} from 'leaflet';
import { NavController } from '@ionic/angular';
import { Geolocation} from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-thromde',
  templateUrl: './thromde.page.html',
  styleUrls: ['./thromde.page.scss'],
})
export class ThromdePage implements OnInit {
  mapc: Map;
  mapg: Map;
  trackCSelectColor: string = "secondary";
  scheCSelectColor: string = "medium";
  trackGSelectColor: string = "secondary";
  scheGSelectColor: string = "medium";
  showTrackC_var: boolean = true;
  showScheC_var: boolean = false;
  showTrackG_var: boolean = true;
  showScheG_var: boolean = false;
  stampResultStatus: boolean = false;
  latitude:any;
  longitude:any;
  constructor(private navCtrl:NavController,private geolocation:Geolocation) {
    this.geolocation.watchPosition().subscribe(data=>
    {
      this.latitude=data.coords.latitude;
      this.longitude=data.coords.longitude;
    })
   }

  ngOnInit() {
  }

  showTrackC()
  {
    this.trackCSelectColor = "secondary";
    this.scheCSelectColor = "medium";
    this.showTrackC_var= true;
    this.showScheC_var = false;
    this.stampResultStatus = false;

  }
  showScheC()
  {
    this.trackCSelectColor = "medium";
    this.scheCSelectColor = "secondary";
    this.showTrackC_var = false;
    this.showScheC_var = true;
    this.stampResultStatus = true;
  }

  showTrackG()
  {
    this.trackGSelectColor = "secondary";
    this.scheGSelectColor = "medium";
    this.showTrackG_var= true;
    this.showScheG_var = false;
    this.stampResultStatus = false;

  }
  showScheG()
  {
    this.trackGSelectColor = "medium";
    this.scheGSelectColor = "secondary";
    this.showTrackG_var = false;
    this.showScheG_var = true;
    this.stampResultStatus = true;
  }
  loadMapC()
  {
    this.mapc=leaflet.map("mapc").setZoom(17,{animate:true,duration:0.5});//.panTo([this.latitude,this.longitude]);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.mapc);
    this.mapc.locate({
      setView: true,
      maxZoom: 20,
    }).on('locationfound', e => {
      e.type.valueOf().toString();
            
      }).on('locationerror', (err) => {
        alert(err);
    })
  }
  loadMapG()
  {
    this.mapg=leaflet.map("mapg").setZoom(17,{animate:true,duration:0.5});//.panTo([this.latitude,this.longitude]);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.mapg);
    this.mapg.locate({
      setView: true,
      maxZoom: 20,
    }).on('locationfound', e => {
      e.type.valueOf().toString();
            
      }).on('locationerror', (err) => {
        alert(err);
    })
  }
  goTrackCMap()
  {
    this.navCtrl.navigateForward('/trackcitybus/'+this.latitude+"/"+this.longitude);
  }
  goTrackGMap()
  {
    this.navCtrl.navigateForward('/trackgarbagetruck/'+this.latitude+"/"+this.longitude);
    
  }
}
