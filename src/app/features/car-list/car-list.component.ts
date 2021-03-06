import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { CarListService } from '../../core';
import { Car } from '../../shared';
import { DISPLAYED_COLUMNS } from './car-list.config';

@Component({
  selector: 'cl-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = DISPLAYED_COLUMNS;
  public dataSource: MatTableDataSource<Car>;

  private subscriptions: Subscription[] = [];

  @ViewChild(MatSort) private sort: MatSort;

  constructor(private http: CarListService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.http.getCar()
      .subscribe((data: Car[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
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

  public showDetail(id: number): void {
    this.router.navigate([`/car/${id}`]);
  }
}
