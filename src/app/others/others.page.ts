import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}
