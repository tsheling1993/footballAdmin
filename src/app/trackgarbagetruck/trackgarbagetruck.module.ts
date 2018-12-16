import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackgarbagetruckPage } from './trackgarbagetruck.page';

const routes: Routes = [
  {
    path: '',
    component: TrackgarbagetruckPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackgarbagetruckPage]
})
export class TrackgarbagetruckPageModule {}
