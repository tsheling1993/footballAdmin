import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-entertainment-admin',
  templateUrl: './entertainment-admin.page.html',
  styleUrls: ['./entertainment-admin.page.scss'],
})
export class EntertainmentAdminPage implements OnInit {
  rTitle : any;
  rVenue : any;
  rTime : any;
  rDate : any;
  rContact : any;
  rLink : any;
  date : any;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker
  ){}

  ngOnInit() {
  }

  //this is the function for uploading data for Entertainment
  insertFs(){
    this.fs.collection('/t_entertainment').add(
      {
        title : this.rTitle,
        venue : this.rVenue,
        time : this.rTime,
        date : this.rDate,
        contract : this.rContact,
        link : this.rLink
      }
    ).then(data=>
      {
        console.log("reach here with entertainment data: "+data);
        this.alert("For Information","Insertion of the entertainment data was successful. press ok to exit...")
        this.navCtl.navigateForward('/musicordance');
      })
  }

  //for the alert
  async alert(header : string, message : string)
  {
    const alert = await this.altCtl.create({
      header : header,
      message : message,
      cssClass : 'ok',
      buttons : ['OK']
    });
    alert.present();
  }

  //for picking the date from datepicker
  // pickDate(){
  //   this.datePicker.show({
  //     date : new Date(),
  //     mode : 'date',
  //     androidTheme : this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
  //   }).then(date=>
  //     this.rDate = date, 
  //     err => console.log('error occur while getting the date', err)
  //     );
  //   }

  pickDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      //androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      androidTheme : this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => 
      //console.log('Got date: ', date),
      this.rDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  }