import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
  AngularFireModule.initializeApp(config),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
