import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController,MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-religious',
  templateUrl: './religious.page.html',
  styleUrls: ['./religious.page.scss'],
})
export class ReligiousPage implements OnInit {
  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
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
    this.fs.collection('/t_religious').get().subscribe(res=>
    {
      res.forEach((doc:any)=>
    {
      this.rData.push({
        date :doc.data().date,
        title:doc.data().title,
        time : doc.data().time,
        venue:doc.data().venue,
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
