import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';

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
  selectedFiles: FileList;
  currentUpload: Upload;
  showmovies : boolean = false;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService
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

  detectFiles(event:any){
    this.selectedFiles = event.target.files;
  }
  ngOnInit() {
  }
  // uploadSingle() {
  //   let file = this.selectedFiles.item(0)
  //   this.currentUpload = new Upload(file);
  //   this.uploadServ.pushUpload(this.currentUpload)
  // }

  // uploadMulti() {
  //   let files = this.selectedFiles
  //   let filesIndex = _.range(files.length)
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.uploadServ.pushUpload(this.currentUpload)}
  //   )
  // }
  //for uploading the the data
  insertFs(){
    let basePath:string="/movies";
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.fs.collection(`${basePath}`).doc(`${this.movieTitle}`).set(
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
        console.log(data);
        this.uploadServ.pushUpload(this.currentUpload,basePath,this.movieTitle);
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
      date =>{
        let dateArray=date.toString().split(' ');
        this.startDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
        err => console.log('Error occurred while getting date: ', err)
      }
    
      //console.log('Got date: ', date),
      
      
    );
  }
  pickEndDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => 
      {
        let dateArray=date.toString().split(' ');
        this.endDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
        err => console.log('Error occurred while getting date: ', err)
      }
      
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
    this.navCtl.navigateForward('/entertainmentAdmin');
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
