import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarDetailComponent } from './car-detail.component';

export const CarDetailRoutes: Routes = [
  {path: 'car/:id', component: CarDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(CarDetailRoutes)
  ],
  exports: [ RouterModule ]
})
export class CarDetailRoutesModule {}
