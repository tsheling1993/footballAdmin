import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-nightlifeupdate',
  templateUrl: './nightlifeupdate.page.html',
  styleUrls: ['./nightlifeupdate.page.scss'],
})
export class NightlifeupdatePage implements OnInit {

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
  ) {}
  ngOnInit() {
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
        this.rDate = doc.data().date;
        this.rTitle = doc.data().title;
        this.rTime = doc.data().time;
        this.rVenue = doc.data().venue;
        this.rPrice = doc.data().price;
        this.rDetail = doc.data().detail;
      });
      })
      console.log(this.rData);
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
    //for uploading the the data
    insertFs(){
      this.fs.collection('/t_nightlife').add(
        {
        date : this.rDate,
        title : this.rTitle,
        time : this.rTime,
        venue : this.rVenue,
        price : this.rPrice,
        detail : this.rDetail 
      }
      ).then(data=>
        {
          console.log("reach here with data: "+data);
            this.alert("For Information","Insertion successful");
            this.navCtl.navigateForward('/nightlife');
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
