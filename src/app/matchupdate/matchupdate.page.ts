import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';
import { ThrowStmt } from '@angular/compiler';
import { Firebase } from '@ionic-native/firebase/ngx';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-matchupdate',
  templateUrl: './matchupdate.page.html',
  styleUrls: ['./matchupdate.page.scss'],
})
export class MatchupdatePage implements OnInit {
  matchTitle : any;
  matchVenue : any;
  matchTime : any;
  matchDate : any;
  matchTeam1 : any;
  matchTeam2 : any;
  matchScore : any;
  playerTeam1 : any;
  playerTeam2 : any;

  date : any;
  matchData:any[]=[];
  title:any;
  desc:any;
  currentUpload: Upload;
  match:any[]=[];
  matchList: Array<any[]>;
  showaddnew : boolean = false;
  matchtitle: string=this.route.snapshot.params['matchtitle'];

  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private menu:MenuController,
    private firebase: Firebase,
    public route: ActivatedRoute)
     { 
       this.loadfromFirebase();
      }

  ngOnInit() {
  }
  loadfromFirebase(){
    this.fs.collection('/t_football_match').doc(`${this.matchtitle}`).get().subscribe(res=>
   //this.fs.collection('/movies').doc('ddd').get().subscribe(res=>

     {
     //   res.forEach((doc:any)=>
     // {
       this.match.push({
         matchtitle:res.data().matchtitle,
         matchteam1:res.data().matchteam1,
         playerteam1:res.data().playerteam1,
         matchteam2:res.data().matchteam2,
         playerteam2:res.data().playerteam2,
         matchvenue:res.data().matchvenue,
         matchsore:res.data().matchsore,
         matchtime:res.data().matchtime,
         matchdate:res.data().matchdate,
       })
       this.matchTitle = res.data().matchtitle;
       this.matchTeam1 = res.data().matchteam1;
       this.playerTeam1 = res.data().playerteam1;
       this.matchTeam2 = res.data().matchteam2;
       this.playerTeam2 = res.data().playerteam2; 
       this.matchVenue = res.data().matchvenue;
       this.matchScore = res.data().matchsore;
       this.matchTime = res.data().matchtime;
       this.matchDate = res.data().matchdate; 
       console.log(this.match);;
     })
 }

 openMenu(){
   this.menu.toggle('myMenu');
 }

 goUpdate(){
   let basePath:string="/t_football_match";
  
   this.fs.collection(`${basePath}`).doc(`${this.matchTitle+this.matchDate+this.matchTime}`).update(
     {
     matchtitle : this.matchTitle,
     matchteam1 : this.matchTeam1,
     playerteam1 : this.playerTeam1,
     matchteam2 : this.matchTeam2,
     playerteam2 : this.playerTeam2,
     matchvenue : this.matchVenue,
     matchsore : this.matchScore,
     matchtime : this.matchTime,
     matchdate : this.matchDate
   }
   ).then(data=>
     {
       console.log("reach here with data: "+data);
         this.alert("For Information","update successful");
         this.navCtl.navigateForward('/footballAdmin');
       console.log(data);
       //this.uploadServ.pushUpload1(this.currentUpload,basePath,this.matchTitle);
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
    //  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    androidTheme : this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
   }).then(
     date =>{
       let dateArray=date.toString().split(' ');
       this.matchDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
       err => console.log('Error occurred while getting date: ', err)
     }
   );
 }
}
