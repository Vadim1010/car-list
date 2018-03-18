import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Author } from '../../shared';

@Injectable()
export class AboutService {
  constructor(private http: HttpClient) {
  }

  public getAuthor(id?: number): Observable<Author> {
    return this.http.get<Author>('author');
  }
}
