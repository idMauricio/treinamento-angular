import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishCardComponent } from './fish-card.component';


@NgModule({
  declarations: [FishCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ FishCardComponent ]
})

export class FishCardModule { }
