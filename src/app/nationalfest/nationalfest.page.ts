import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-nationalfest',
  templateUrl: './nationalfest.page.html',
  styleUrls: ['./nationalfest.page.scss'],
})
export class NationalfestPage implements OnInit {
  rTitle : any;
  rDate : any;
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
  ) { 
    //for getting the data of festival from the firebase
    this.fs.collection('/t_festival').get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.rData.push({
          title:doc.data().title,
          date :doc.data().date,
          time : doc.data().time,
          venue:doc.data().venue,
          detail : doc.data().detail,
        })
      })
      })
      console.log(this.rData);
  }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}
