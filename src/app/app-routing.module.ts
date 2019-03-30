import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'footballAdmin', pathMatch: 'full' },
  { path: 'footballAdmin', loadChildren: './football-admin/football-admin.module#FootballAdminPageModule' },
  { path: 'football', loadChildren: './football/football.module#FootballPageModule' },
  { path: 'footbalFullAdmin', loadChildren: './footbal-full-admin/footbal-full-admin.module#FootbalFullAdminPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'footballAdmin', loadChildren: './football-admin/football-admin.module#FootballAdminPageModule' },
  { path: 'footbalFutsalAdmin', loadChildren: './footbal-futsal-admin/footbal-futsal-admin.module#FootbalFutsalAdminPageModule' },
  { path: 'football-changlimithang', loadChildren: './football-changlimithang/football-changlimithang.module#FootballChanglimithangPageModule' },
  { path: 'futsal-changlimithang', loadChildren: './futsal-changlimithang/futsal-changlimithang.module#FutsalChanglimithangPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'footmatchadmin', loadChildren: './footmatchadmin/footmatchadmin.module#FootmatchadminPageModule' },
  { path: 'footmatchaddmore', loadChildren: './footmatchaddmore/footmatchaddmore.module#FootmatchaddmorePageModule' },
  { path: 'matchupdate/:matchtitle', loadChildren: './matchupdate/matchupdate.module#MatchupdatePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
