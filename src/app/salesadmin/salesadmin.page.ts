import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-salesadmin',
  templateUrl: './salesadmin.page.html',
  styleUrls: ['./salesadmin.page.scss'],
})
export class SalesadminPage implements OnInit {
  
  constructor(
    private navCtl : NavController,
    private menu: MenuController) { }
  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }

  goOffer(){
    this.navCtl.navigateForward('/offer');
  }
  goUsedItem(){
    this.navCtl.navigateForward('/useditem');
  }
}
