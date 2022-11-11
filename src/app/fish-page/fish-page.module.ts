import { FishCardModule } from './../fish-card/fish-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FishPagePageRoutingModule } from './fish-page-routing.module';

import { FishPagePage } from './fish-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FishPagePageRoutingModule,
    FishCardModule
  ],
  declarations: [FishPagePage]
})
export class FishPagePageModule {}
