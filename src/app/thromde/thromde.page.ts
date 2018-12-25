import { Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';
import { Map,Marker} from 'leaflet';
import { NavController,MenuController } from '@ionic/angular';
import { Geolocation} from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-thromde',
  templateUrl: './thromde.page.html',
  styleUrls: ['./thromde.page.scss'],
})
export class ThromdePage implements OnInit {
  mapc: Map;
  mapg: Map;
  trackCSelectColor: string = "tertiary";
  scheCSelectColor: string = "medium";
  trackGSelectColor: string = "tertiary";
  scheGSelectColor: string = "medium";
  showTrackC_var: boolean = true;
  showScheC_var: boolean = false;
  showTrackG_var: boolean = true;
  showScheG_var: boolean = false;
  stampResultStatus: boolean = false;
  latitude:any;
  longitude:any;
  constructor(private navCtrl:NavController,
    private geolocation:Geolocation,
    private menu: MenuController) {
    this.geolocation.watchPosition().subscribe(data=>
    {
      this.latitude=data.coords.latitude;
      this.longitude=data.coords.longitude;
    })
   }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  showTrackC()
  {
    this.trackCSelectColor = "tertiary";
    this.scheCSelectColor = "medium";
    this.showTrackC_var= true;
    this.showScheC_var = false;
    this.stampResultStatus = false;

  }
  showScheC()
  {
    this.trackCSelectColor = "medium";
    this.scheCSelectColor = "tertiary";
    this.showTrackC_var = false;
    this.showScheC_var = true;
    this.stampResultStatus = true;
  }

  showTrackG()
  {
    this.trackGSelectColor = "tertiary";
    this.scheGSelectColor = "medium";
    this.showTrackG_var= true;
    this.showScheG_var = false;
    this.stampResultStatus = false;

  }
  showScheG()
  {
    this.trackGSelectColor = "medium";
    this.scheGSelectColor = "tertiary";
    this.showTrackG_var = false;
    this.showScheG_var = true;
    this.stampResultStatus = true;
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
