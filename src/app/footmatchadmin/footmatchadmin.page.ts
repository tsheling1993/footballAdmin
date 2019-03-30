import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController, LoadingController } from '@ionic/angular';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-footmatchadmin',
  templateUrl: './footmatchadmin.page.html',
  styleUrls: ['./footmatchadmin.page.scss'],
})
export class FootmatchadminPage implements OnInit {
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
  selectedFiles: FileList;
  currentUpload: Upload;
  match:any[]=[];
  movie:any[]=[];
  matchList: Array<any[]>;
  showaddnew : boolean = false;
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private menu : MenuController,
    public loadingController: LoadingController,
    )
     { 
      this.presentLoading();
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
            matchdate : doc.data().matchdate,
          })
          // this.movieList.push(this.movie);
          console.log("match data:"+this.match);
          if(this.match){
            console.log("up");
            this.loadingController.dismiss();      
          }
        });
        })
    }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  goAddMore(){
    this.navCtl.navigateForward('/footmatchaddmore');
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
  goDelete(matchtitle:any, matchdate: any, matchtime: any){
    this.presentAlertConfirm(matchtitle, matchdate, matchtime);
  }
  //for updating the item
  goEdit(matchtitle : any){
    console.log(matchtitle);
    this.navCtl.navigateForward('/matchupdate/'+matchtitle);
  }

  deleteSure(matchtitle:any){
    let basePath:string="/t_football_match";
    this.fs.collection(`${basePath}`).doc(`${matchtitle}`).delete().then(data=>
      {
          this.alert("For Information","Deletion successful");
          this.navCtl.navigateForward('football');
      }
      )
  }

  async presentAlertConfirm(matchtitle:any, matchdate: any, matchtime: any) {
    const alert = await this.altCtl.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteSure(matchtitle+matchdate+matchtime)
          }
        }
      ]
    });

    await alert.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
     // message: 'Hellooo',
      duration: 15000,
      spinner: 'crescent',
      cssClass: 'loaderClass'
    });
    return await loading.present();
  }
}
