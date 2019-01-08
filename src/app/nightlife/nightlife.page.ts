import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController,MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-nightlife',
  templateUrl: './nightlife.page.html',
  styleUrls: ['./nightlife.page.scss'],
})
export class NightlifePage implements OnInit {

  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rPrice : any;
  rDetail : any;
  date : any;
  rData:any[]=[];
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController
  ) 
   { 
    this.fs.collection('/t_nightlife',ref=>ref.orderBy('date', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.rData.push({
          date :doc.data().date,
          title:doc.data().title,
          time : doc.data().time,
          venue:doc.data().venue,
          price:doc.data().price,
          detail : doc.data().detail,
        })
      });
      })
      console.log(this.rData);
   }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}
