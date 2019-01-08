import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NightlifeadminPage } from './nightlifeadmin.page';

const routes: Routes = [
  {
    path: '',
    component: NightlifeadminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NightlifeadminPage]
})
export class NightlifeadminPageModule {}
