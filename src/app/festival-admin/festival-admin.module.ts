import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FestivalAdminPage } from './festival-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FestivalAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FestivalAdminPage]
})
export class FestivalAdminPageModule {}
