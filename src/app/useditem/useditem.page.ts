import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-useditem',
  templateUrl: './useditem.page.html',
  styleUrls: ['./useditem.page.scss'],
})
export class UseditemPage implements OnInit {
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
  items:any[]=[];
  salesList: Array<any[]>;
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private menu: MenuController) { }

  ngOnInit() {

    //for retriving useditem data
    this.fs.collection('/useditems',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.items.push({
          itemtitle:doc.data().itemtitle,
          uploaddate :doc.data().uploaddate,
          itemprice : doc.data().itemprice,
          itemcontact : doc.data().itemcontact,
          detail : doc.data().detail,
          itemstatus : doc.data().itemstatus,
          url1: doc.data().url1,
          url2: doc.data().url2,
          url3: doc.data().url3,
        })
      });
      })
      console.log(this.items);
  }
goAddMore(){
  this.navCtl.navigateForward('/useditemaddmore');
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
goDelete(itemtitle:any){
  let basePath:string="/";
  this.fs.collection(`${basePath}`).doc(`${itemtitle}`).delete().then(data=>
    {
        this.alert("For Information","Deletion successful");
        this.navCtl.navigateForward('/useditem');
    }
    )
}
//for updating the item
goEdit(itemtitle : any){
  console.log(itemtitle);
  this.navCtl.navigateForward('/useditemupdate/'+itemtitle);
}
}
