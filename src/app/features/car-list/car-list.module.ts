import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListComponent } from './car-list.component';
import { UsersRoutingModule } from './car-list.routes';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    CarListComponent
  ],
  exports: [CarListComponent],
})
export class CarListModule {
}
