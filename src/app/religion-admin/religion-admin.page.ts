import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';


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
  rData:any[]=[];
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController
  ) 
  
  { 
    this.fs.collection('/t_religious',ref=>ref.orderBy('date', 'desc')).get().subscribe(res=>
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
  goAddMore(){
    this.navCtl.navigateForward('/religionaddmore');
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
  goDelete(title:any){
    let basePath:string="/";
    this.fs.collection(`${basePath}`).doc(`${title}`).delete().then(data=>
      {
          this.alert("For Information","Deletion successful");
          this.navCtl.navigateForward('/religion');
      }
      )
  }
  //for updating the item
  goEdit(title : any){
    console.log(title);
    this.navCtl.navigateForward('/religionupdate/'+title);
  }
}
