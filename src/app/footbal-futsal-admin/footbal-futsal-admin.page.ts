import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-footbal-futsal-admin',
  templateUrl: './footbal-futsal-admin.page.html',
  styleUrls: ['./footbal-futsal-admin.page.scss'],
})
export class FootbalFutsalAdminPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}
