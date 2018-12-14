import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-religion-admin',
  templateUrl: './religion-admin.page.html',
  styleUrls: ['./religion-admin.page.scss'],
})
export class ReligionAdminPage implements OnInit {
  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rDetail : any;
  date : any;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker
  ) {}
  ngOnInit() {
  }

    //for uploading the the data
    insertFs(){
      this.fs.collection('/t_religious').add(
        {
        date : this.rDate,
        title : this.rTitle,
        time : this.rTime,
        venue : this.rVenue,
        detail : this.rDetail 
      }
      ).then(data=>
        {
          console.log("reach here with data: "+data);
            this.alert("For Information","Insertion successful");
            this.navCtl.navigateForward('/religious');
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
}
