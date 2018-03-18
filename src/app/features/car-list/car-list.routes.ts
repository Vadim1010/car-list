import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarListComponent } from './car-list.component';

export const CarListRoutes: Routes = [
  {path: 'home', component: CarListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(CarListRoutes)
  ],
  exports: [ RouterModule ]
})
export class CarListRoutingModule {}
