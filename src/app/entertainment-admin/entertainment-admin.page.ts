import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';

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
        })
      })
      console.log(this.rData);
  }

  
  openMenu(){
    this.menu.toggle('myMenu');
  }
goAddMore(){
  this.navCtl.navigateForward('/entertainmentaddmore');
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
//for deleting the movie item
goDelete(tilte:any){
  let basePath:string="/";
  this.fs.collection(`${basePath}`).doc(`${tilte}`).delete().then(data=>
    {
        this.alert("For Information","Deletion successful");
        this.navCtl.navigateForward('/musicordance');
    }
    )
}
//for updating the item
goEdit(tilte : any){
  console.log(tilte);
  this.navCtl.navigateForward('/entertainmentupdate/'+tilte);
}

  }