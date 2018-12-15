import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntertainmentAdminPage } from './entertainment-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EntertainmentAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntertainmentAdminPage]
})
export class EntertainmentAdminPageModule {}
