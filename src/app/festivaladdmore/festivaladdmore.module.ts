import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FestivaladdmorePage } from './festivaladdmore.page';

const routes: Routes = [
  {
    path: '',
    component: FestivaladdmorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FestivaladdmorePage]
})
export class FestivaladdmorePageModule {}
