import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule, MatSortModule } from '@angular/material';

import { CarListComponent } from './car-list.component';
import { UsersRoutingModule } from './car-list.routes';
import { HttpClientInterceptor } from '../../core';
import { CarListService } from './car-list.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
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
