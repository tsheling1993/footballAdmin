import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-sales-admin',
  templateUrl: './sales-admin.page.html',
  styleUrls: ['./sales-admin.page.scss'],
})
export class SalesAdminPage implements OnInit {

  rDate : any;

  specialoffer_var: boolean = false;

  constructor(
    private datePicker: DatePicker,
  ) { }

  ngOnInit() {
  }

  showSpecialOffer(){
    if(this.specialoffer_var == false){
      this.specialoffer_var = true;
    }
    else{
      this.specialoffer_var = false;
    }
  }

  pickDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => 
      //console.log('Got date: ', date),
      this.rDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
