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
  rData:any[]=[];
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController
  ) { 
      
  }

  ngOnInit() {
    //for getting the data of festival from the firebase
    this.fs.collection('/t_festival').get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.rData.push({
          title:doc.data().title,
          date :doc.data().date,
          time : doc.data().time,
          venue:doc.data().venue,
          detail : doc.data().detail,
        })
      })
      })
      console.log(this.rData);
  }

  goAddMore(){
    this.navCtl.navigateForward('/festivaladdmore');
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
          this.navCtl.navigateForward('/nationalfest');
      }
      )
  }
  //for updating the item
  goEdit(title : any){
    console.log(title);
    this.navCtl.navigateForward('/festivalupdate/'+title);
  }
}
