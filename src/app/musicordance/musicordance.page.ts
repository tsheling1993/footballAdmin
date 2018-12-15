import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-musicordance',
  templateUrl: './musicordance.page.html',
  styleUrls: ['./musicordance.page.scss'],
})
export class MusicordancePage implements OnInit {
  rTitle : any;
  rVenue : any;
  rTime : any;
  rDate : any;
  rContact : any;
  rLink : any;
  date : any;
  rData:any[]=[];
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker
  ) { 
    //for retriving the entertainment data from the database
    this.fs.collection('/t_entertainment').get().subscribe(res=>
      {
        res.forEach((doc:any)=>
        {
          this.rData.push({
            title : doc.data().title,
            venue : doc.data().venue,
            time : doc.data().time,
            date : doc.date().date,
            contact : doc.data().contact,
            link : doc.data().link,
          })
        })
      })
      console.log(this.rData);
  }

  ngOnInit() {
  }

}
