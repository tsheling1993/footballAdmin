import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movieTitle : any;
  movieVenue : any;
  movieTime : any;
  startDate : any;
  endDate : any;
  moviePrice : any;
  movieContact : any;
  movieTailor : any;
  movie:any[]=[];
  movieList: Array<any[]>;
  title:any;
  desc:any;
  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser
  )
  { 
    this.fs.collection('/movies',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
    {
      res.forEach((doc:any)=>
    {
      this.movie.push({
        movietitle:doc.data().movietitle,
        venue:doc.data().venue,
        time : doc.data().time,
        startdate :doc.data().startdate,
        enddate : doc.data().enddate,
        price : doc.data().price,
        contact : doc.data().contact,
        tailor : doc.data().tailor,
        url: doc.data().url
      })
      // this.movieList.push(this.movie);
    });
    })
    console.log(this.movie);
  }
  
  ngOnInit() {
  }

  tailorLink(tailor: any){
    console.log("tailor: "+tailor);
    const browser = this.iab.create(tailor);
  }
}
