import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CarListService } from '../../core';
import { Car } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cl-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit, OnDestroy {
  public carItem: Car;

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private http: CarListService) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.getCar(+params.get('id'));
      }));
  }

  private getCar(id: number): void {
    this.subscriptions.push(this.http.getCar(id)
      .subscribe((carList: Car) => {
        this.carItem = carList;
      })
    );
  }

  public ngOnDestroy(): void {
    if (this.subscriptions.length) {
      this.subscriptions.forEach((elem: Subscription): void => {
        elem.unsubscribe();
      });
    }
  }
}
