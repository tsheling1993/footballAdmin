import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

    private menu:MenuController
    constructor() { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }

}
