import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-nightlifeadmin',
  templateUrl: './nightlifeadmin.page.html',
  styleUrls: ['./nightlifeadmin.page.scss'],
})
export class NightlifeadminPage implements OnInit {

  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rPrice : any;
  rDetail : any;
  date : any;
  rData:any[]=[];
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private menu: MenuController) { }

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
      });
      })
      console.log(this.rData);
  }

goAddMore(){
  this.navCtl.navigateForward('/nightlifeaddmore');
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
        this.navCtl.navigateForward('/nightlife');
    }
    )
}
//for updating the item
goEdit(title : any){
  console.log(title);
  this.navCtl.navigateForward('/nightlifeupdate/'+title);
}
}
