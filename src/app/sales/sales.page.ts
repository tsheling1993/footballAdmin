import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  salesTitle : any;
  uploadDate : any;
  salesPrice : any;
  salesContact : any;
  
  sales:any[]=[];
  salesList: Array<any[]>;
  title:any;
  desc:any;
  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu: MenuController
  )
  { 
    this.fs.collection('/sales',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
    {
      res.forEach((doc:any)=>
    {
      this.sales.push({
        salestitle:doc.data().salestitle,
        uploaddate :doc.data().uploaddate,
        price : doc.data().price,
        contact : doc.data().contact,
        url: doc.data().url
      })
      // this.movieList.push(this.movie);
    });
    })
    console.log(this.sales);
  }
  
  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}

