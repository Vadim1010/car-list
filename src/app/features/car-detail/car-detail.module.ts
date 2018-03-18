import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailComponent } from './car-detail.component';
import { CarDetailRoutesModule } from './car-detail.routes';

@NgModule({
  imports: [
    CommonModule,
    CarDetailRoutesModule
  ],
  declarations: [
    CarDetailComponent
  ],
  exports: [CarDetailComponent],
})
export class CarDetailModule {
}
