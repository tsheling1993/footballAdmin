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
  salesDetail : any;
  sales:any[]=[];
  items:any[]=[];
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
        detail : doc.data().detail,
        url: doc.data().url
      })
      // this.movieList.push(this.movie);
    });
    })
    console.log(this.sales);
    //for retriving useditem data
    this.fs.collection('/useditems',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.items.push({
          itemtitle:doc.data().itemtitle,
          uploaddate :doc.data().uploaddate,
          detail : doc.data().detail,
          url: doc.data().url
        })
        // this.movieList.push(this.movie);
      });
      })
      console.log(this.items);
  }
  
  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}

