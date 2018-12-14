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
        console.log(data);
      }
      )
  }
  async alert(header : any, message : any)
  {
    this.altCtl.create(
      {
        header : header, 
        message : message,
        buttons:[
          {
            text : 'okay',
            handler:()=>
            {
              this.navCtl.navigateForward('/home');
            }
          }
        ]
      }
    )
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

  religion(){
    this.navCtl.navigateForward('/religionAdmin');
  }
}
