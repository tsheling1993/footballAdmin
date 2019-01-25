import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-musicordance',
  templateUrl: './musicordance.page.html',
  styleUrls: ['./musicordance.page.scss'],
})
export class MusicordancePage implements OnInit {
  rTitle : any;
  rVenue : any;
  rTime : any;
  rDate : any;
  rContact : any;
  rLink : any;
  rDetail : any;
  date : any;
  rData:any[]=[];
  eData : any[]=[];
  changeradiovalley: boolean = false;
  changekuzueng: boolean = false;
  changekuzudzo: boolean = false;
  changeyeya: boolean = false;
  changebbseng: boolean = false;
  changebbsdzo: boolean = false;
  showentertainment : boolean =true;
  
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu:MenuController
  ) { 
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
       //for retriving the radio detdail
       this.fs.collection('/t_radioPrograms').get().subscribe(res=>
        {
          res.forEach((doc:any)=>
        {
          this.eData.push({
            date1 :doc.data().date1,
            date2 :doc.data().date2,
            date3 :doc.data().date3,
          })
        });
        })
        console.log(this.eData);
  }

  // loadRadio(){
  //     //for retriving the radio detdail
  //     this.fs.collection('/t_radioPrograms').get().subscribe(res=>
  //       {
  //         res.forEach((doc:any)=>
  //       {
  //         this.rData.push({
  //           date1 :doc.data().date1,
  //           date2 :doc.data().date2,
  //           date3 :doc.data().date3,
  //         })
  //       });
  //       })
  //       console.log(this.rData);
  // }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }
  //this part is for the radio programs
  ShowradioVally(){
    this.changeradiovalley = true;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = false;
    this.showentertainment = false;
  }
  showKuzuE(){
    this.changeradiovalley = false;
    this.changekuzueng = true;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = false;
  }
  showKuzuD(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = true;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = false;
  }
  showYeya(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = true;
    this.changebbseng = false;
    this.changebbsdzo = false;
  }
  showBbsE(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = true;
    this.changebbsdzo = false;
  }
  showBbsD(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = true;
  }
}
