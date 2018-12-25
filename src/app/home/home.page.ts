import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
  )
  {

  }
  goMovies()
  {
    this.navCtrl.navigateForward('/movies');
  }

  goFootball()
  {
    this.navCtrl.navigateForward('/football');
  }
  
  goNightLife()
  {
    this.navCtrl.navigateForward('/nightlife');
  }

  goMusicOrDance()
  {
    this.navCtrl.navigateForward('/musicordance');
  }

  goReligious()
  {
    this.navCtrl.navigateForward('/religious');
  }

  goNatFest()
  {
    this.navCtrl.navigateForward('/nationalfest');
  }

  goSales()
  {
    this.navCtrl.navigateForward('/sales');
  }

  goThromde()
  {
    this.navCtrl.navigateForward('/thromde');
  }

  goOthers()
  {
    this.navCtrl.navigateForward('/others');
  }
  admin()
  {
   this.navCtrl.navigateForward('/admin');
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }
}
