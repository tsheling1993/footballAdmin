import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-festival-admin',
  templateUrl: './festival-admin.page.html',
  styleUrls: ['./festival-admin.page.scss'],
})
export class FestivalAdminPage implements OnInit {
  rTitle : any;
  rDate : any;
  rTime : any;
  rVenue : any;
  rDetail : any;
  date : any;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  //for uploading the the data
  insertFs(){
    this.fs.collection('/t_festival').add(
      {
      title : this.rTitle,
      date : this.rDate,
      time : this.rTime,
      venue : this.rVenue,
      detail : this.rDetail 
    }
    ).then(data=>
      {
        console.log("reach here with data: "+data);
          this.alert("For Information","Insertion successful");
          this.navCtl.navigateForward('/nationalfest');
      }
      )
  }

  async alert(header:string,message:string)
  {
    const alert=await this.altCtl.create({
      header:header,
      message: message,
      cssClass:'ok',
      buttons:['OK']
    });
    alert.present();
  }
  pickDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
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
