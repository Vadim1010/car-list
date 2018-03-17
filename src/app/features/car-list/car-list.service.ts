import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Car } from './car-list.model';

@Injectable()
export class CarListService {
  constructor(private http: HttpClient) {
  }

  public getCar(id?: number): Observable<Car[]> {
    return this.http.get<Car[]>(`cars/${id || ''}`);
  }
}
