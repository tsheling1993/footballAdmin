import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {
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
  match:any[]=[];
  matchList: Array<any[]>;
  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu:MenuController
  ) 
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

  showChangFootball(){
    this.navCtrl.navigateForward('/football-changlimithang');
  }

  showChangFutsal(){
    this.navCtrl.navigateForward('/futsal-changlimithang');
  }

}
