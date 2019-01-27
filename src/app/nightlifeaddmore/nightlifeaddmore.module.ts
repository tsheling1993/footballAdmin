import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NightlifeaddmorePage } from './nightlifeaddmore.page';

const routes: Routes = [
  {
    path: '',
    component: NightlifeaddmorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NightlifeaddmorePage]
})
export class NightlifeaddmorePageModule {}
