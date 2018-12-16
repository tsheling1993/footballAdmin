import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-footbal-full-admin',
  templateUrl: './footbal-full-admin.page.html',
  styleUrls: ['./footbal-full-admin.page.scss'],
})
export class FootbalFullAdminPage implements OnInit {
  
  monday_var: boolean = false;
  
  mon_all: boolean = true;  
  mon_8to10am: boolean = true;
  mon_10to12am: boolean = true;
  mon_12to2pm: boolean = true;
  mon_2to4pm: boolean = true;
  mon_4to6pm: boolean = true;
  mon_6to8pm: boolean = true;
  mon_8to10pm: boolean = true;

  constructor(
    private fs : AngularFirestore
  ) { }

  ngOnInit() {
  }

  goMonday(){
    if(this.monday_var == false){
      this.monday_var = true;
    }
    else{
      this.monday_var = false;
    }
  }

  monAllToggle(){
    if(this.mon_all == true){
      this.mon_8to10am = true;
      this.mon_10to12am = true;
      this.mon_12to2pm = true;
      this.mon_2to4pm = true;
      this.mon_4to6pm = true;
      this.mon_6to8pm = true;
      this.mon_8to10pm = true;
    }
    else{
      this.mon_8to10am = false;
      this.mon_10to12am = false;
      this.mon_12to2pm = false;
      this.mon_2to4pm = false;
      this.mon_4to6pm = false;
      this.mon_6to8pm = false;
      this.mon_8to10pm = false;
    }
  }

  monChangeStatus(time_status: any){
    if(time_status == "mon_8to10am_arg"){
      console.log("monday 8 to 10 am");
      this.updateOnFirebase_Monday('mon_8to10am_arg',this.mon_8to10am);
    }
    else if(time_status == "mon_10to12am_arg"){
      console.log("monday 10 to 12 am");
      this.updateOnFirebase_Monday('mon_10to12am_arg',this.mon_10to12am);
    }
    else if(time_status == "mon_12to2pm_arg"){
      console.log("monday 12 to 2 pm");
      this.updateOnFirebase_Monday('mon_12to2pm_arg',this.mon_12to2pm);
    }
    else if(time_status == "mon_2to4pm_arg"){
      console.log("monday 2 to 4 pm");
      this.updateOnFirebase_Monday('mon_2to4pm_arg',this.mon_2to4pm);
    }
    else if(time_status == "mon_4to6pm_arg"){
      console.log("monday 4 to 6 pm");
      this.updateOnFirebase_Monday('mon_4to6pm_arg',this.mon_4to6pm);
    }
    else if(time_status == "mon_6to8pm_arg"){
      console.log("monday 6 to 8 pm");
      this.updateOnFirebase_Monday('mon_6to8pm_arg',this.mon_6to8pm);
    }
    else if(time_status == "mon_8to10pm_arg"){
      console.log("monday 8 to 10 pm");
      this.updateOnFirebase_Monday('mon_8to10pm_arg',this.mon_8to10pm);
    }
  }
  
  updateOnFirebase_Monday(mon_key: any, mon_val: any){
    //console.log(mon_Key);
    if(mon_key == "mon_8to10am_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').doc('time').update(
        {
        mon8to10am : mon_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(mon_key == "mon_10to12am_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').doc('time').update(
        {
        mon10to12am : mon_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(mon_key == "mon_12to2pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').doc('time').update(
        {
        mon12to2pm : mon_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(mon_key == "mon_2to4pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').doc('time').update(
        {
        mon2to4pm : mon_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(mon_key == "mon_4to6pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').doc('time').update(
        {
        mon4to6pm : mon_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(mon_key == "mon_6to8pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').doc('time').update(
        {
        mon6to8pm : mon_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
    else if(mon_key == "mon_8to10pm_arg"){
      this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').doc('time').update(
        {
        mon8to10pm : mon_val,
      }
      ).then(data=>
        {
          console.log(data);
        }
        )
    }
  }
}