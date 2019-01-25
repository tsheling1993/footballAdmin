import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReligionupdatePage } from './religionupdate.page';

const routes: Routes = [
  {
    path: '',
    component: ReligionupdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReligionupdatePage]
})
export class ReligionupdatePageModule {}
