import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-footmatchaddmore',
  templateUrl: './footmatchaddmore.page.html',
  styleUrls: ['./footmatchaddmore.page.scss'],
})
export class FootmatchaddmorePage implements OnInit {
  matchTitle : any;
  matchVenue : any;
  matchTime : any;
  matchDate : any;
  matchTeam1 : any;
  matchTeam2 : any;
  matchScore : any;
  date : any;
  matchData:any[]=[];
  title:any;
  desc:any;
  currentUpload: Upload;
  match:any[]=[];
  matchList: Array<any[]>;
  showaddnew : boolean = false;
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private menu:MenuController)
   { 
     this.fs.collection('/t_football_match',ref=>ref.orderBy('matchdate', 'desc')).get().subscribe(res=>
    {
      res.forEach((doc:any)=>
    {
      this.match.push({
        matchtitle : doc.data().matchtitle,
        matchteam1 : doc.data().matchteam1,
        matchteam2 : doc.data().matchteam2,
        matchsore : doc.data().matchsore,
        matchvenue : doc.data().matchvenue,
        matchtime : doc.data().matchtime,
        matchdate : doc.data().matchdate
        
      })
      // this.movieList.push(this.movie);
      console.log("match data:"+this.match);
    });
    })
    
   }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }

  insertFs(){
    let basePath:string="/t_football_match";
    this.fs.collection(`${basePath}`).doc(`${this.matchTitle+this.matchDate+this.matchTime}`).set(
      {
      matchtitle : this.matchTitle,
      matchteam1 : this.matchTeam1,
      matchteam2 : this.matchTeam2,
      matchsore : this.matchScore,
      matchvenue : this.matchVenue,
      matchtime : this.matchTime,
      matchdate : this.matchDate
    }
    ).then(data=>
      {
        console.log("reach here with data: "+data);
          this.alert("For Information","Insertion successful");
          this.navCtl.navigateForward('/football');
        console.log(data);
       // this.uploadServ.pushUpload1(this.currentUpload,basePath,this.matchTitle);
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
      date =>{
        let dateArray=date.toString().split(' ');
        this.matchDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
        err => console.log('Error occurred while getting date: ', err)
      }
    );
  }
}
