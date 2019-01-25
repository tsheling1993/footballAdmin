import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntertainmentupdatePage } from './entertainmentupdate.page';

const routes: Routes = [
  {
    path: '',
    component: EntertainmentupdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntertainmentupdatePage]
})
export class EntertainmentupdatePageModule {}
