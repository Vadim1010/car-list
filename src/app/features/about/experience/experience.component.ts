import { Component, Input } from '@angular/core';
import { Experience } from '../../../shared';

@Component({
  selector: 'cl-experience',
  templateUrl: './experience.component.html',
  styleUrls: [
      './experience.component.scss'
  ]
})
export class ExperienceComponent {
  @Input() public experiences: Experience[];
}
