import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';
import { ThrowStmt } from '@angular/compiler';
import { Firebase } from '@ionic-native/firebase/ngx';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-movieupdate',
  templateUrl: './movieupdate.page.html',
  styleUrls: ['./movieupdate.page.scss'],
})
export class MovieupdatePage implements OnInit {
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
  movie:any[]=[];
  movieList: Array<any[]>;
  showaddnew : boolean = false;

  movietitle: string=this.route.snapshot.params['movietitle'];

  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private menu:MenuController,
    private firebase: Firebase,
    public route: ActivatedRoute) { 
      this.loadfromFirebase();
    }

  ngOnInit() {
  }

  loadfromFirebase(){
     this.fs.collection('/movies').doc(`${this.movietitle}`).get().subscribe(res=>
    //this.fs.collection('/movies').doc('ddd').get().subscribe(res=>

      {
      //   res.forEach((doc:any)=>
      // {
        this.movie.push({
          movietitle:res.data().movietitle,
          venue:res.data().venue,
          time : res.data().time,
          startdate :res.data().startdate,
          enddate : res.data().enddate,
          price : res.data().price,
          contact : res.data().contact,
          tailor : res.data().tailor,
          url: res.data().url,
        })
        this.movieTitle = res.data().movietitle;
        this.movieVenue = res.data().venue;
        this.movieTime = res.data().time;
        this.startDate = res.data().startdate;
        this.endDate = res.data().enddate;
        this.moviePrice = res.data().price;
        this.movieContact = res.data().contact;
        this.movieTailor = res.data().tailor;  
      })
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  detectFiles(event:any){
    this.selectedFiles = event.target.files;
  }

  goUpdate(){
    let basePath:string="/movies";
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.fs.collection(`${basePath}`).doc(`${this.movieTitle}`).update(
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
          this.alert("For Information","update successful");
          this.navCtl.navigateForward('/movies');
        console.log(data);
        this.uploadServ.pushUpload1(this.currentUpload,basePath,this.movieTitle);
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
}
