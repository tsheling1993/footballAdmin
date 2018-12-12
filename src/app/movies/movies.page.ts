import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movieTitle:any;
  movieDesc:any;
  movieData:any[]=[];
  title:any;
  desc:any;
  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  )
  { 
    this.fs.collection('/movies').get().subscribe(res=>
    {
      res.forEach((doc:any)=>
    {
      this.movieData.push({
        movietitle:doc.data().movietitle,
        moviedesc:doc.data().moviedescription
      })
    });
    })
    // this.title=this.movieData.;
    // this.desc=this.movieData[1];
    console.log(this.movieData);

  }
s
  ngOnInit() {
  }

  insertFs()
  {
    this.fs.collection('/movies').add(
      {
        movietitle:this.movieTitle,
        moviedescription:this.movieDesc
      }
    ).then(data=>
    {
      console.log(data);
      this.alert("Info","Inserted Succesfully")
    }    
  )
  }
  async alert(header:any,message:any)
  {
    this.alertCtrl.create(
      {
        header:header,
        message:message,
        buttons:[
          {
            text:'Okay',
            handler:()=>
            {
              this.navCtrl.navigateForward('/home');
            }
          }
        ]
      }
    )
  }
}
