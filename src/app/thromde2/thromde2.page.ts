import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-thromde2',
  templateUrl: './thromde2.page.html',
  styleUrls: ['./thromde2.page.scss'],
})
export class Thromde2Page implements OnInit {

  showCitybusSchedule_var: boolean = true;
  showCitybusTracker_var: boolean = false;

  showGarbageTruck_var: boolean = false;
  showCitybus_var: boolean = true;

  citybusScheduleColor: string = "tertiary";
  citybusTrackerColor: string = "medium";

  citybusSelectColor: string = "tertiary";
  garbageSelectColor: string = "medium";

  garbageScheduleColor: string = "tertiary";
  garbageTrackerColor: string = "medium";

  showGarbageTracker_var: boolean = false;
  showGarbageSchedule_var: boolean = true;

  terminalButton: boolean = true;
  destinationButton: boolean = true;

  monSatChanglam_var: boolean = true;
  monSatChubachu_var: boolean = false;
  sunChanglam_var: boolean = false;
  sunChubachu_var: boolean = false;

  submitButton: boolean = true;
  showTimeStatus: boolean = false;

  timeCitybus: any;

  citybusScheduleData:any[]=[];

  constructor(
    private fs: AngularFirestore,
  ) 
  { 
    this.loadCitybusSchedule();
  }

  ngOnInit() {
  }
  customPopoverOptions: any = {
    // header: 'Hair Color',
    // subHeader: 'Select your hair color',
    // message: 'Only select your dominant hair color'
    cssClass: 'destination',
  };

  //Below codes are all for show and hide features
  showCitybusTracker(){
    this.showCitybusTracker_var = true;
    this.showCitybusSchedule_var = false;
    this.citybusScheduleColor = "medium";
    this.citybusTrackerColor = "tertiary";
  }

  showCitybusSchedule(){
    this.showCitybusSchedule_var = true;    
    this.showCitybusTracker_var = false;
    this.citybusScheduleColor = "tertiary";
    this.citybusTrackerColor = "medium";
  }

  showGarbageTruck(){
    this.showGarbageTruck_var = true;
    this.showCitybus_var  = false;
    this.garbageSelectColor = "tertiary";
    this.citybusSelectColor = "medium";
  }

  showCitybus(){
    this.showCitybus_var = true;
    this.showGarbageTruck_var = false;
    this.citybusSelectColor = "tertiary";
    this.garbageSelectColor = "medium";
  }

  showGarbageSchedule(){
    this.showGarbageSchedule_var = true;    
    this.showGarbageTracker_var = false;
    this.garbageScheduleColor = "tertiary";
    this.garbageTrackerColor = "medium";
  }

  showGarbageTracker(){
    this.showGarbageTracker_var = true;
    this.showGarbageSchedule_var = false;
    this.garbageScheduleColor = "medium";
    this.garbageTrackerColor = "tertiary";
  }

  changedDaySelectedCity(){
    this.terminalButton = false;
    this.changedTerminalSelectedCity();
  }

  terminalCity: any;
  daySelectedCity: any;
  destinationCity: any;

  changedTerminalSelectedCity(){
    if(this.terminalCity != null){
      this.destinationButton = false;
    }
    console.log("terminal"+this.terminalCity+" day "+this.daySelectedCity);
    if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity"){
      this.monSatChanglam_var = true;
      this.monSatChubachu_var = false;
      this.sunChanglam_var = false;
      this.sunChubachu_var = false;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity"){
      this.monSatChanglam_var = false;
      this.monSatChubachu_var = true;
      this.sunChanglam_var = false;
      this.sunChubachu_var = false;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity"){
      this.monSatChanglam_var = false;
      this.monSatChubachu_var = false;
      this.sunChanglam_var = true;
      this.sunChubachu_var = false;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity"){
      this.monSatChanglam_var = false;
      this.monSatChubachu_var = false;
      this.sunChanglam_var = false;
      this.sunChubachu_var = true;
    }
  }
  changedDestinationSelectedCity(){
    if(this.terminalCity != null && this.daySelectedCity != null && this.destinationCity != null){
      this.submitButton = false;
    }
  }

  findTiming(){
    this.showTimeStatus = true;
    // if()
  //   terminalCity: any;
  // daySelectedCity: any;
  // destinationCity: any;
    if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "dechencholing"){
      this.timeCitybus = this.mon_chang_dechencholing;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "babesaViaLungtenphu"){
      this.timeCitybus = this.mon_chang_babesaViaLungtenphu;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhababesaEW"){
      this.timeCitybus = this.mon_chang_olakBabesaEW;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhaViaMC"){
      this.timeCitybus = this.mon_chang_olakViaMC;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "changjijiViaMC"){
      this.timeCitybus = this.mon_chang_changjiViaMC;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "jungshinaPamtsho"){
      this.timeCitybus = this.mon_chang_junshiPamtsho;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "motithang"){
      this.timeCitybus = this.mon_chang_motithang;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoMonFri"){
      this.timeCitybus = this.mon_chuba_hontshoWeekdays;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoSat"){
      this.timeCitybus = this.mon_chuba_hontshoSat;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangMonFri"){
      this.timeCitybus = this.mon_chuba_chamgangWeekdays;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangSat"){
      this.timeCitybus = this.mon_chuba_chamgangSat;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "kuenselphodrang"){
      this.timeCitybus = this.mon_chuba_kuenselphodrang;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "serbithang"){
      this.timeCitybus = this.mon_chuba_serbithang;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "dechencholing"){
      this.timeCitybus = this.sun_chang_dechencholing;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "babesaViaLungtenphu"){
      this.timeCitybus = this.sun_chang_babesaViaLungtenphu;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhababesaEW"){
      this.timeCitybus = this.sun_chang_olakBabesaEW;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "jungshinaPamtsho"){
      this.timeCitybus = this.sun_chang_junshiPamtsho;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "motithang"){
      this.timeCitybus = this.sun_chang_motithang;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoSun"){
      this.timeCitybus = this.sun_chuba_hontsho;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangSun"){
      this.timeCitybus = this.sun_chuba_chamgang;
    }
  }

  mon_chang_babesaViaLungtenphu: any;
  mon_chang_changjiViaMC: any;
  mon_chang_dechencholing: any;
  mon_chang_junshiPamtsho: any;
  mon_chang_motithang: any;
  mon_chang_olakBabesaEW: any;
  mon_chang_olakViaMC: any;
  mon_chuba_chamgangSat: any;
  mon_chuba_chamgangWeekdays: any;
  mon_chuba_hontshoSat: any;
  mon_chuba_hontshoWeekdays: any;
  mon_chuba_kuenselphodrang: any;
  mon_chuba_serbithang: any;
  sun_chang_babesaViaLungtenphu: any;
  sun_chang_dechencholing: any;
  sun_chang_junshiPamtsho: any;
  sun_chang_motithang: any;
  sun_chang_olakBabesaEW: any;
  sun_chuba_hontsho: any;
  sun_chuba_chamgang: any;

  loadCitybusSchedule(){
    this.fs.collection('/thromde').doc('citybusSchedule').get().subscribe(res=>  
      {
        this.citybusScheduleData.push({
          mon_chang_babesaViaLungtenphu:res.data().mon_chang_babesaViaLungtenphu,
          mon_chang_changjiViaMC:res.data().mon_chang_changjiViaMC,
          mon_chang_dechencholing : res.data().mon_chang_dechencholing,
          mon_chang_junshiPamtsho :res.data().mon_chang_junshiPamtsho,
          mon_chang_motithang : res.data().mon_chang_motithang,
          mon_chang_olakBabesaEW : res.data().mon_chang_olakBabesaEW,
          mon_chang_olakViaMC : res.data().mon_chang_olakViaMC,
          mon_chuba_chamgangSat : res.data().mon_chuba_chamgangSat,
          mon_chuba_chamgangWeekdays : res.data().mon_chuba_chamgangWeekdays,
          mon_chuba_hontshoSat : res.data().mon_chuba_hontshoSat,
          mon_chuba_hontshoWeekdays : res.data().mon_chuba_hontshoWeekdays,
          mon_chuba_kuenselphodrang : res.data().mon_chuba_kuenselphodrang,
          mon_chuba_serbithang : res.data().mon_chuba_serbithang,
          sun_chang_babesaViaLungtenphu : res.data().sun_chang_babesaViaLungtenphu,
          sun_chang_dechencholing : res.data().sun_chang_dechencholing,
          sun_chang_junshiPamtsho : res.data().sun_chang_junshiPamtsho,
          sun_chang_motithang : res.data().sun_chang_motithang,
          sun_chang_olakBabesaEW : res.data().sun_chang_olakBabesaEW,
          sun_chuba_hontsho : res.data().sun_chuba_hontsho,
          sun_chuba_chamgang : res.data().sun_chuba_chamgang
        })
        this.mon_chang_babesaViaLungtenphu = res.data().mon_chang_babesaViaLungtenphu;
        this.mon_chang_changjiViaMC = res.data().mon_chang_changjiViaMC,
        this.mon_chang_dechencholing = res.data().mon_chang_dechencholing,
        this.mon_chang_junshiPamtsho = res.data().mon_chang_junshiPamtsho,
        this.mon_chang_motithang = res.data().mon_chang_motithang,
        this.mon_chang_olakBabesaEW = res.data().mon_chang_olakBabesaEW,
        this.mon_chang_olakViaMC = res.data().mon_chang_olakViaMC,
        this.mon_chuba_chamgangSat = res.data().mon_chuba_chamgangSat,
        this.mon_chuba_chamgangWeekdays = res.data().mon_chuba_chamgangWeekdays,
        this.mon_chuba_hontshoSat = res.data().mon_chuba_hontshoSat,
        this.mon_chuba_hontshoWeekdays = res.data().mon_chuba_hontshoWeekdays,
        this.mon_chuba_kuenselphodrang = res.data().mon_chuba_kuenselphodrang,
        this.mon_chuba_serbithang = res.data().mon_chuba_serbithang,
        this.sun_chang_babesaViaLungtenphu = res.data().sun_chang_babesaViaLungtenphu,
        this.sun_chang_dechencholing = res.data().sun_chang_dechencholing,
        this.sun_chang_junshiPamtsho = res.data().sun_chang_junshiPamtsho,
        this.sun_chang_motithang = res.data().sun_chang_motithang,
        this.sun_chang_olakBabesaEW = res.data().sun_chang_olakBabesaEW,
        this.sun_chuba_hontsho = res.data().sun_chuba_hontsho,
        this.sun_chuba_chamgang = res.data().sun_chuba_chamgang
      })
      console.log(this.citybusScheduleData);
  }
}
