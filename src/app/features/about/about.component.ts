import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AboutService } from './about.service';
import { Author } from '../../shared';

@Component({
  selector: 'cl-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  public author: Author;

  private subscriptions: Subscription[] = [];

  constructor(private aboutService: AboutService) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.aboutService.getAuthor()
      .subscribe((data: Author) => {
        this.author = data;
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
