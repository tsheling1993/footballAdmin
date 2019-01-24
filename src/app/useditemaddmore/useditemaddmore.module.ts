import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UseditemaddmorePage } from './useditemaddmore.page';

const routes: Routes = [
  {
    path: '',
    component: UseditemaddmorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UseditemaddmorePage]
})
export class UseditemaddmorePageModule {}
