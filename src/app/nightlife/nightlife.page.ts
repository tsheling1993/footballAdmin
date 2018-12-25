import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-nightlife',
  templateUrl: './nightlife.page.html',
  styleUrls: ['./nightlife.page.scss'],
})
export class NightlifePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}
