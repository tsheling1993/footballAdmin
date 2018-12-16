import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment-admin',
  templateUrl: './entertainment-admin.page.html',
  styleUrls: ['./entertainment-admin.page.scss'],
})
export class EntertainmentAdminPage implements OnInit {

<<<<<<< HEAD
  ngOnInit() {
  }

  //this is the function for uploading data for Entertainment
  insertFs(){
    this.fs.collection('/t_entertainment').add(
      {
        title : this.rTitle,
        venue : this.rVenue,
        time : this.rTime,
        date : this.rDate,
        contract : this.rContact,
        link : this.rLink
      }
    ).then(data=>
      {
        console.log("reach here with entertainment data: "+data);
        this.alert("For Information","Insertion of the entertainment data was successful. press ok to exit...")
        this.navCtl.navigateForward('/musicordance');
      })
  }
=======
  constructor() { }
>>>>>>> c723d98dcb454b8095c1f843a3844df9ef12374b

  ngOnInit() {
  }

}
