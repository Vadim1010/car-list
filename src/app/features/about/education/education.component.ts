import { Component, Input } from '@angular/core';

import { Education } from '../../../shared';

@Component({
  selector: 'cl-education',
  templateUrl: './education.component.html',
  styleUrls: [
    './education.component.scss'
  ]
})
export class EducationComponent {
  @Input() public educations: Education[];
}
