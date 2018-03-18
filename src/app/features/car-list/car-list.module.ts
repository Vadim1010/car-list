import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule, MatSortModule } from '@angular/material';

import { CarListComponent } from './car-list.component';
import { CarListRoutingModule } from './car-list.routes';
import { HttpClientInterceptor, CarListService } from '../../core';

@NgModule({
  imports: [
    CommonModule,
    CarListRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    CarListComponent,
  ],
  exports: [CarListComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
    CarListService
  ]
})
export class CarListModule {
}
