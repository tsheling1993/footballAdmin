import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-entertainmentupdate',
  templateUrl: './entertainmentupdate.page.html',
  styleUrls: ['./entertainmentupdate.page.scss'],
})
export class EntertainmentupdatePage implements OnInit {

  rTitle : any;
  rVenue : any;
  rTime : any;
  rDate : any;
  rContact : any;
  rDetail : any;
  date : any;
  rData:any[]=[];
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController
  ){}

  ngOnInit() {
    //for retriving the entertainment data from the database
    this.fs.collection('/t_entertainment',ref=>ref.orderBy('date', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
        {
          this.rData.push({
            tilte : doc.data().tilte,
            venue : doc.data().venue,
            time : doc.data().time,
            date : doc.data().date,
            contact : doc.data().contract,
            detail : doc.data().detail,
          })
          this.rTitle = doc.data().tilte;
          this.rVenue = doc.data().venue;
          this.rTime = doc.data().time;
          this.rDate = doc.data().date;
          this.rContact = doc.data().contract;
          this.rDetail = doc.data().detail;
        })
      })
      console.log(this.rData);
  }

  //this is the function for uploading data for Entertainment
  insertFs(){
    this.fs.collection('/t_entertainment').add(
      {
        tilte : this.rTitle,
        venue : this.rVenue,
        time : this.rTime,
        date : this.rDate,
        contract : this.rContact,
        detail : this.rDetail
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

  openMenu(){
    this.menu.toggle('myMenu');
  }
}
