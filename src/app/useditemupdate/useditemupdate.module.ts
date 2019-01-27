import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UseditemupdatePage } from './useditemupdate.page';

const routes: Routes = [
  {
    path: '',
    component: UseditemupdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UseditemupdatePage]
})
export class UseditemupdatePageModule {}
