import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarListService  {
  constructor(private http: HttpClient){
  }

  public getCar(id?: number): Observable<any> {
    return this.http.get(`cars/${id || ''}`);
  }
}
