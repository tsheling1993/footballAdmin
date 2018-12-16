import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-radio-admin',
  templateUrl: './radio-admin.page.html',
  styleUrls: ['./radio-admin.page.scss'],
})
export class RadioAdminPage implements OnInit {
  pOne : any;
  pTwo : any;
  pThree : any;
  date : any;
  eDate : any;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker
  ) { }

  ngOnInit() {
  }

  //for uploading the the data
  insertFs(){
    this.fs.collection('/t_radioPrograms').add(
      {
      date1 : this.pOne,
      date2 : this.pTwo,
      date3 : this.pThree, 
    }
    ).then(data=>
      {
        console.log("reach here with data: "+data);
          this.alert("For Information","Insertion successful");
          this.navCtl.navigateForward('/musicordance');
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
      this.eDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
