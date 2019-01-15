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
  changFootballTues_var: boolean = false;
  changFootballWed_var: boolean = false;
  changFootballThu_var: boolean = false;
  changFootballFri_var: boolean = false;
  changFootballSat_var: boolean = false;
  changFootballSun_var: boolean = false;
 
  changFootMonData:any[]=[];
  changFootTuesData:any[]=[];
  changFootWedData:any[]=[];
  changFootThuData:any[]=[];
  changFootFriData:any[]=[];
  changFootSatData:any[]=[];
  changFootSunData:any[]=[];


  //Futsal
  changFutsal_var: boolean = false;

  changFutsalMon_var: boolean = false;
  changFutsalTues_var: boolean = false;
  changFutsalWed_var: boolean = false;
  changFutsalThu_var: boolean = false;
  changFutsalFri_var: boolean = false;
  changFutsalSat_var: boolean = false;
  changFutsalSun_var: boolean = false;

  changFutsalMonData:any[]=[];
  changFutsalTuesData:any[]=[];
  changFutsalWedData:any[]=[];
  changFutsalThuData:any[]=[];
  changFutsalFriData:any[]=[];
  changFutsalSatData:any[]=[];
  changFutsalSunData:any[]=[];

  constructor(
    private fs: AngularFirestore,
    private menu: MenuController
  ) 
  {
    this.loadFromFirestoreMonday();
    this.loadFromFirestoreTuesday();
    this.loadFromFirestoreWednesday();
    this.loadFromFirestoreThursday();
    this.loadFromFirestoreFriday();
    this.loadFromFirestoreSaturday();
    this.loadFromFirestoreSunday();

    this.loadFromFirestoreFutsalMonday();
    this.loadFromFirestoreFutsalTuesday();
    this.loadFromFirestoreFutsalWednesday();
    this.loadFromFirestoreFutsalThursday();
    this.loadFromFirestoreFutsalFriday();
    this.loadFromFirestoreFutsalSaturday();
    this.loadFromFirestoreFutsalSunday();
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
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballMon_var == false){
      this.changFootballMon_var = true;
    }
    else{
      this.changFootballMon_var = false;
    }
  }

  showChangFullTues(){
    this.changFootballMon_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballTues_var == false){
      this.changFootballTues_var = true;
    }
    else{
      this.changFootballTues_var = false;
    }
  }

  showChangFullWed(){
    console.log("wednesday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballWed_var == false){
      this.changFootballWed_var = true;
      console.log("wednesday true")
    }
    else{
      this.changFootballWed_var = false;
    }
  }

  showChangFullThu(){
    console.log("thursday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballThu_var == false){
      this.changFootballThu_var = true;
      console.log("thursday true")
    }
    else{
      this.changFootballThu_var = false;
    }
  }

  showChangFullFri(){
    console.log("friday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballSat_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballFri_var == false){
      this.changFootballFri_var = true;
      console.log("friday true")
    }
    else{
      this.changFootballFri_var = false;
    }
  }

  showChangFullSat(){
    console.log("saturday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSun_var = false;

    if(this.changFootballSat_var == false){
      this.changFootballSat_var = true;
      console.log("saturday true")
    }
    else{
      this.changFootballSat_var = false;
    }
  }

  showChangFullSun(){
    console.log("sunday")
    this.changFootballMon_var = false;
    this.changFootballTues_var = false;
    this.changFootballWed_var = false;
    this.changFootballThu_var = false;
    this.changFootballFri_var = false;
    this.changFootballSat_var = false;

    if(this.changFootballSun_var == false){
      this.changFootballSun_var = true;
      console.log("sunday true")
    }
    else{
      this.changFootballSun_var = false;
    }
  }

  loadFromFirestoreMonday(){
    this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFootMonData.push({
          mon8to10am:doc.data().time_8to10am,
          mon10to12am:doc.data().time_10to12am,
          mon12to2pm : doc.data().time_12to2pm,
          mon2to4pm :doc.data().time_2to4pm,
          mon4to6pm : doc.data().time_4to6pm,
          mon6to8pm : doc.data().time_6to8pm,
          mon8to10pm : doc.data().time_8to10pm
        })
      });
      })
      console.log(this.changFootMonData);
  }

  loadFromFirestoreTuesday(){
    this.fs.collection('/football').doc('Changlimithang_Full').collection('/tuesday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFootTuesData.push({
          tues8to10am:doc.data().time_8to10am,
          tues10to12am:doc.data().time_10to12am,
          tues12to2pm : doc.data().time_12to2pm,
          tues2to4pm :doc.data().time_2to4pm,
          tues4to6pm : doc.data().time_4to6pm,
          tues6to8pm : doc.data().time_6to8pm,
          tues8to10pm : doc.data().time_8to10pm
        })
      });
      })
      console.log(this.changFootTuesData);
   }

    loadFromFirestoreWednesday(){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/wednesday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFootWedData.push({
            wed8to10am:doc.data().time_8to10am,
            wed10to12am:doc.data().time_10to12am,
            wed12to2pm : doc.data().time_12to2pm,
            wed2to4pm :doc.data().time_2to4pm,
            wed4to6pm : doc.data().time_4to6pm,
            wed6to8pm : doc.data().time_6to8pm,
            wed8to10pm : doc.data().time_8to10pm
          })
        });
        })
        console.log(this.changFootWedData);
      }

    loadFromFirestoreThursday(){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/thursday').get().subscribe(res=>  
        {
          res.forEach((doc:any)=>
        {
          this.changFootThuData.push({
            thu8to10am:doc.data().time_8to10am,
            thu10to12am:doc.data().time_10to12am,
            thu12to2pm : doc.data().time_12to2pm,
            thu2to4pm :doc.data().time_2to4pm,
            thu4to6pm : doc.data().time_4to6pm,
            thu6to8pm : doc.data().time_6to8pm,
            thu8to10pm : doc.data().time_8to10pm
          })
        });
        })
        console.log(this.changFootFriData);
      }

      loadFromFirestoreFriday(){
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/friday').get().subscribe(res=>  
          {
            res.forEach((doc:any)=>
          {
            this.changFootFriData.push({
              fri8to10am:doc.data().time_8to10am,
              fri10to12am:doc.data().time_10to12am,
              fri12to2pm : doc.data().time_12to2pm,
              fri2to4pm :doc.data().time_2to4pm,
              fri4to6pm : doc.data().time_4to6pm,
              fri6to8pm : doc.data().time_6to8pm,
              fri8to10pm : doc.data().time_8to10pm
            })
          });
          })
          console.log(this.changFootFriData);
        }

      loadFromFirestoreSaturday(){
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/saturday').get().subscribe(res=>  
          {
            res.forEach((doc:any)=>
          {
            this.changFootSatData.push({
              sat8to10am:doc.data().time_8to10am,
              sat10to12am:doc.data().time_10to12am,
              sat12to2pm : doc.data().time_12to2pm,
              sat2to4pm :doc.data().time_2to4pm,
              sat4to6pm : doc.data().time_4to6pm,
              sat6to8pm : doc.data().time_6to8pm,
              sat8to10pm : doc.data().time_8to10pm
            })
          });
          })
          console.log(this.changFootFriData);
      }

      loadFromFirestoreSunday(){
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/sunday').get().subscribe(res=>  
          {
            res.forEach((doc:any)=>
          {
            this.changFootSunData.push({
              sun8to10am:doc.data().time_8to10am,
              sun10to12am:doc.data().time_10to12am,
              sun12to2pm : doc.data().time_12to2pm,
              sun2to4pm :doc.data().time_2to4pm,
              sun4to6pm : doc.data().time_4to6pm,
              sun6to8pm : doc.data().time_6to8pm,
              sun8to10pm : doc.data().time_8to10pm
            })
          });
          })
          console.log(this.changFootSunData);
      }

  callChang(){

  }


  //Futsal
  showChangFutsal(){
    if(this.changFutsal_var == false){
      this.changFutsal_var = true;
    }
    else{
      this.changFutsal_var = false;
    }
  }

  showChangFutsalMon(){
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalMon_var == false){
      this.changFutsalMon_var = true;
    }
    else{
      this.changFutsalMon_var = false;
    }
  }

  showChangFutsalTues(){
    this.changFutsalMon_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalTues_var == false){
      this.changFutsalTues_var = true;
    }
    else{
      this.changFutsalTues_var = false;
    }
  }

  showChangFutsalWed(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalWed_var == false){
      this.changFutsalWed_var = true;
    }
    else{
      this.changFutsalWed_var = false;
    }
  }

  showChangFutsalThu(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalThu_var == false){
      this.changFutsalThu_var = true;
    }
    else{
      this.changFutsalThu_var = false;
    }
  }

  showChangFutsalFri(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalSat_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalFri_var == false){
      this.changFutsalFri_var = true;
    }
    else{
      this.changFutsalFri_var = false;
    }
  }
  showChangFutsalSat(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSun_var = false;

    if(this.changFutsalSat_var == false){
      this.changFutsalSat_var = true;
    }
    else{
      this.changFutsalSat_var = false;
    }
  }
  showChangFutsalSun(){
    this.changFutsalMon_var = false;
    this.changFutsalTues_var = false;
    this.changFutsalWed_var = false;
    this.changFutsalThu_var = false;
    this.changFutsalFri_var = false;
    this.changFutsalSat_var = false;

    if(this.changFutsalSun_var == false){
      this.changFutsalSun_var = true;
    }
    else{
      this.changFutsalSun_var = false;
    }
  }

  loadFromFirestoreFutsalMonday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/monday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalMonData.push({
          mon8to9am:doc.data().time_8to9am,
          mon9to10am:doc.data().time_9to10am,
          mon10to11am : doc.data().time_10to11am,
          mon11to12pm :doc.data().time_11to12pm,
          mon12to1pm : doc.data().time_12to1pm,
          mon1to2pm : doc.data().time_1to2pm,
          mon2to3pm : doc.data().time_2to3pm,
          mon3to4pm : doc.data().time_3to4pm,
          mon4to5pm : doc.data().time_4to5pm,
          mon5to6pm : doc.data().time_5to6pm,
          mon6to7pm : doc.data().time_6to7pm,
          mon7to8pm : doc.data().time_7to8pm,
          mon8to9pm : doc.data().time_8to9pm,
          mon9to10pm : doc.data().time_9to10pm
        })
      });
      })
      console.log(this.changFutsalMonData);
  }

  loadFromFirestoreFutsalTuesday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/tuesday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalTuesData.push({
          tues8to9am:doc.data().time_8to9am,
          tues9to10am:doc.data().time_9to10am,
          tues10to11am : doc.data().time_10to11am,
          tues11to12pm :doc.data().time_11to12pm,
          tues12to1pm : doc.data().time_12to1pm,
          tues1to2pm : doc.data().time_1to2pm,
          tues2to3pm : doc.data().time_2to3pm,
          tues3to4pm : doc.data().time_3to4pm,
          tues4to5pm : doc.data().time_4to5pm,
          tues5to6pm : doc.data().time_5to6pm,
          tues6to7pm : doc.data().time_6to7pm,
          tues7to8pm : doc.data().time_7to8pm,
          tues8to9pm : doc.data().time_8to9pm,
          tues9to10pm : doc.data().time_9to10pm
        })
      });
      })
      console.log(this.changFutsalTuesData);
  }

  loadFromFirestoreFutsalWednesday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/wednesday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalWedData.push({
          wed8to9am:doc.data().time_8to9am,
          wed9to10am:doc.data().time_9to10am,
          wed10to11am : doc.data().time_10to11am,
          wed11to12pm :doc.data().time_11to12pm,
          wed12to1pm : doc.data().time_12to1pm,
          wed1to2pm : doc.data().time_1to2pm,
          wed2to3pm : doc.data().time_2to3pm,
          wed3to4pm : doc.data().time_3to4pm,
          wed4to5pm : doc.data().time_4to5pm,
          wed5to6pm : doc.data().time_5to6pm,
          wed6to7pm : doc.data().time_6to7pm,
          wed7to8pm : doc.data().time_7to8pm,
          wed8to9pm : doc.data().time_8to9pm,
          wed9to10pm : doc.data().time_9to10pm
        })
      });
      })
      console.log(this.changFutsalWedData);
  }

  loadFromFirestoreFutsalThursday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/thursday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalThuData.push({
          thu8to9am:doc.data().time_8to9am,
          thu9to10am:doc.data().time_9to10am,
          thu10to11am : doc.data().time_10to11am,
          thu11to12pm :doc.data().time_11to12pm,
          thu12to1pm : doc.data().time_12to1pm,
          thu1to2pm : doc.data().time_1to2pm,
          thu2to3pm : doc.data().time_2to3pm,
          thu3to4pm : doc.data().time_3to4pm,
          thu4to5pm : doc.data().time_4to5pm,
          thu5to6pm : doc.data().time_5to6pm,
          thu6to7pm : doc.data().time_6to7pm,
          thu7to8pm : doc.data().time_7to8pm,
          thu8to9pm : doc.data().time_8to9pm,
          thu9to10pm : doc.data().time_9to10pm
        })
      });
      })
      console.log(this.changFutsalThuData);
  }

  loadFromFirestoreFutsalFriday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/friday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalFriData.push({
          fri8to9am:doc.data().time_8to9am,
          fri9to10am:doc.data().time_9to10am,
          fri10to11am : doc.data().time_10to11am,
          fri11to12pm :doc.data().time_11to12pm,
          fri12to1pm : doc.data().time_12to1pm,
          fri1to2pm : doc.data().time_1to2pm,
          fri2to3pm : doc.data().time_2to3pm,
          fri3to4pm : doc.data().time_3to4pm,
          fri4to5pm : doc.data().time_4to5pm,
          fri5to6pm : doc.data().time_5to6pm,
          fri6to7pm : doc.data().time_6to7pm,
          fri7to8pm : doc.data().time_7to8pm,
          fri8to9pm : doc.data().time_8to9pm,
          fri9to10pm : doc.data().time_9to10pm
        })
      });
      })
      console.log(this.changFutsalFriData);
  }
  loadFromFirestoreFutsalSaturday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/saturday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalSatData.push({
          sat8to9am:doc.data().time_8to9am,
          sat9to10am:doc.data().time_9to10am,
          sat10to11am : doc.data().time_10to11am,
          sat11to12pm :doc.data().time_11to12pm,
          sat12to1pm : doc.data().time_12to1pm,
          sat1to2pm : doc.data().time_1to2pm,
          sat2to3pm : doc.data().time_2to3pm,
          sat3to4pm : doc.data().time_3to4pm,
          sat4to5pm : doc.data().time_4to5pm,
          sat5to6pm : doc.data().time_5to6pm,
          sat6to7pm : doc.data().time_6to7pm,
          sat7to8pm : doc.data().time_7to8pm,
          sat8to9pm : doc.data().time_8to9pm,
          sat9to10pm : doc.data().time_9to10pm
        })
      });
      })
      console.log(this.changFutsalSatData);
  }
  loadFromFirestoreFutsalSunday(){
    this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/sunday').get().subscribe(res=>  
      {
        res.forEach((doc:any)=>
      {
        this.changFutsalSunData.push({
          sun8to9am:doc.data().time_8to9am,
          sun9to10am:doc.data().time_9to10am,
          sun10to11am : doc.data().time_10to11am,
          sun11to12pm :doc.data().time_11to12pm,
          sun12to1pm : doc.data().time_12to1pm,
          sun1to2pm : doc.data().time_1to2pm,
          sun2to3pm : doc.data().time_2to3pm,
          sun3to4pm : doc.data().time_3to4pm,
          sun4to5pm : doc.data().time_4to5pm,
          sun5to6pm : doc.data().time_5to6pm,
          sun6to7pm : doc.data().time_6to7pm,
          sun7to8pm : doc.data().time_7to8pm,
          sun8to9pm : doc.data().time_8to9pm,
          sun9to10pm : doc.data().time_9to10pm
        })
      });
      })
      console.log(this.changFutsalSunData);
  }
}
