import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../services/uploadpic/uploadpic.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImageResizer } from '@ionic-native/image-resizer/ngx';
const config={
  apiKey: "AIzaSyA4Lp4OYSekcXStv6OYK3_Usua82Pojr_8",
    authDomain: "thimphu-events.firebaseapp.com",
    databaseURL: "https://thimphu-events.firebaseio.com",
    projectId: "thimphu-events",
    storageBucket: "thimphu-events.appspot.com",
    messagingSenderId: "509542569948"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireStorageModule,
  AngularFireModule.initializeApp(config),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    InAppBrowser,
    DatePicker,
    UploadpicService,
    Geolocation,
    ImageResizer,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
