import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'movies', loadChildren: './movies/movies.module#MoviesPageModule' },
  { path: 'football', loadChildren: './football/football.module#FootballPageModule' },
  { path: 'nightlife', loadChildren: './nightlife/nightlife.module#NightlifePageModule' },
  { path: 'musicordance', loadChildren: './musicordance/musicordance.module#MusicordancePageModule' },
  { path: 'religious', loadChildren: './religious/religious.module#ReligiousPageModule' },
  { path: 'nationalfest', loadChildren: './nationalfest/nationalfest.module#NationalfestPageModule' },
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'thromde', loadChildren: './thromde/thromde.module#ThromdePageModule' },
  { path: 'others', loadChildren: './others/others.module#OthersPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'religionAdmin', loadChildren: './religion-admin/religion-admin.module#ReligionAdminPageModule' },
  { path: 'festivalAdmin', loadChildren: './festival-admin/festival-admin.module#FestivalAdminPageModule' },
  { path: 'entertainmentAdmin', loadChildren: './entertainment-admin/entertainment-admin.module#EntertainmentAdminPageModule' },
  { path: 'footballAdmin', loadChildren: './football-admin/football-admin.module#FootballAdminPageModule' },
  { path: 'footbalFullAdmin', loadChildren: './footbal-full-admin/footbal-full-admin.module#FootbalFullAdminPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'trackgarbagetruck/:latitude/:longitude', loadChildren: './trackgarbagetruck/trackgarbagetruck.module#TrackgarbagetruckPageModule' },
  { path: 'trackcitybus/:latitude/:longitude', loadChildren: './trackcitybus/trackcitybus.module#TrackcitybusPageModule' },
  { path: 'movieadmin', loadChildren: './movieadmin/movieadmin.module#MovieadminPageModule' },
  { path: 'salesadmin', loadChildren: './salesadmin/salesadmin.module#SalesadminPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'offer', loadChildren: './offer/offer.module#OfferPageModule' },
  { path: 'useditem', loadChildren: './useditem/useditem.module#UseditemPageModule' },
  { path: 'radioadmin', loadChildren: './radioadmin/radioadmin.module#RadioadminPageModule' },
  { path: 'nightlifeadmin', loadChildren: './nightlifeadmin/nightlifeadmin.module#NightlifeadminPageModule' },
  { path: 'otheradmin', loadChildren: './otheradmin/otheradmin.module#OtheradminPageModule' },
  { path: 'footballAdmin', loadChildren: './football-admin/football-admin.module#FootballAdminPageModule' },
  { path: 'footbalFutsalAdmin', loadChildren: './footbal-futsal-admin/footbal-futsal-admin.module#FootbalFutsalAdminPageModule' },
  { path: 'movieupdate/:movietitle', loadChildren: './movieupdate/movieupdate.module#MovieupdatePageModule' },
  { path: 'movieaddmore', loadChildren: './movieaddmore/movieaddmore.module#MovieaddmorePageModule' },
  { path: 'football-changlimithang', loadChildren: './football-changlimithang/football-changlimithang.module#FootballChanglimithangPageModule' },
  { path: 'futsal-changlimithang', loadChildren: './futsal-changlimithang/futsal-changlimithang.module#FutsalChanglimithangPageModule' },
  { path: 'thromde2', loadChildren: './thromde2/thromde2.module#Thromde2PageModule' },
  { path: 'footmatchadmin', loadChildren: './footmatchadmin/footmatchadmin.module#FootmatchadminPageModule' },
  { path: 'footmatchaddmore', loadChildren: './footmatchaddmore/footmatchaddmore.module#FootmatchaddmorePageModule' },
  { path: 'matchupdate/:matchtitle', loadChildren: './matchupdate/matchupdate.module#MatchupdatePageModule' },
  { path: 'useditemaddmore', loadChildren: './useditemaddmore/useditemaddmore.module#UseditemaddmorePageModule' },
  { path: 'useditemupdate/:itemtitle', loadChildren: './useditemupdate/useditemupdate.module#UseditemupdatePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
