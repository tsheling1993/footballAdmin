import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  movieTitle : any;
  movieVenue : any;
  movieTime : any;
  startDate : any;
  endDate : any;
  moviePrice : any;
  movieContact : any;
  movieTailor : any;
  date : any;
  movieData:any[]=[];
  title:any;
  desc:any;
  showmovies : boolean = false;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker
  )
  {
    //for retriving the data
    // this.fs.collection('/movies').get().subscribe(res=>
    //   {
    //     res.forEach((doc : any)=>
    //     {
    //       this.movieData.push({
    //         movietitle : doc.data().movietitle,
    //         venue : doc.data().venue
    //       })
    //     });
    //   })
    //   console.log(this.movieData);
  }

  ngOnInit() {
  }
  //for uploading the the data
  insertFs(){
    this.fs.collection('/movies').add(
      {
      movietitle : this.movieTitle,
      venue : this.movieVenue,
      time : this.movieTime,
      startdate : this.startDate, 
      enddate : this.endDate,
      price : this.moviePrice,
      contact : this.movieContact,
      tailor : this.movieTailor
    }
    ).then(data=>
      {
        console.log("reach here with data: "+data);
          this.alert("For Information","Insertion successful");
          this.navCtl.navigateForward('/movies');
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
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => 
      //console.log('Got date: ', date),
      this.startDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  pickEndDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => 
      this.endDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  movies(){
    this.showmovies = true;
  }
  football(){
    this.showmovies = false;
  }
  nightlife(){
    this.showmovies = false;
  }
  music(){
    this.showmovies = false;
  }
  religion(){
    this.navCtl.navigateForward('/religionAdmin');
  }
  nationalfest(){
    this.showmovies = false;
    this.navCtl.navigateForward('/festivalAdmin');
  }
  special(){
    this.showmovies = false;
  }
  thromde(){
    this.showmovies = false;
  }
  others(){
    this.showmovies = false;
  }
}
