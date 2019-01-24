import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  salesTitle : any;
  itemTitle : any;
  itemPrice : any;
  itemContact : any;
  itemDetail : any;
  itemStatus : any;
  uploadDate : any;
  salesDetail : any;
  date : any;
  salesData:any[]=[];
  title:any;
  desc:any;
  sales:any[]=[];
  salesList: Array<any[]>;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private menu: MenuController) { }

  ngOnInit() {

    //for retriving useditem data
    this.fs.collection('/sales',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.sales.push({
          salestitle:doc.data().salestitle,
          uploaddate :doc.data().uploaddate,
          detail : doc.data().detail,
        })
      });
      })
      console.log(this.sales);
  }
goAddMore(){
  this.navCtl.navigateForward('/offeraddmore');
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
goDelete(salestitle:any){
  let basePath:string="/";
  this.fs.collection(`${basePath}`).doc(`${salestitle}`).delete().then(data=>
    {
        this.alert("For Information","Deletion successful");
        this.navCtl.navigateForward('/offer');
    }
    )
}
//for updating the item
goEdit(salestitle : any){
  console.log(salestitle);
  this.navCtl.navigateForward('/offerupdate/'+salestitle);
}

}
