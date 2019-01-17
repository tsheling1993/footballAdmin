import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {

  constructor(
    private fs: AngularFirestore,
    private menu: MenuController,
    private navCtrl: NavController,
  ) 
  { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  showChangFootball(){
    this.navCtrl.navigateForward('/football-changlimithang');
  }

  showChangFutsal(){
    this.navCtrl.navigateForward('/futsal-changlimithang');
  }

}
