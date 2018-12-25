import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {

  changFootball_var: boolean = false;
  changFootballMon_var: boolean = false;
 
  changFootMonData:any[]=[];

  constructor(
    private fs: AngularFirestore,
    private menu: MenuController
  ) 
  {
    this.loadFromFirestore();
  }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  showChangFootball(){
    if(this.changFootball_var == false){
      this.changFootball_var = true;
    }
    else{
      this.changFootball_var = false;
    }
  }
  
  showChangFullMon(){
    if(this.changFootballMon_var == false){
      this.changFootballMon_var = true;
    }
    else{
      this.changFootballMon_var = false;
    }
  }

  loadFromFirestore(){
    this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFootMonData.push({
          mon8to10am:doc.data().mon8to10am,
          mon10to12am:doc.data().mon10to12am,
          mon12to2pm : doc.data().mon12to2pm,
          mon2to4pm :doc.data().mon2to4pm,
          mon4to6pm : doc.data().mon4to6pm,
          mon6to8pm : doc.data().mon6to8pm,
          mon8to10pm : doc.data().mon8to10pm
        })
      });
      })
      console.log(this.changFootMonData);
  }
  
  callChang(){

  }
}
