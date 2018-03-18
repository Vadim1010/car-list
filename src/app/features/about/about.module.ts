import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

import { AboutComponent } from './about.component';
import { AboutRoutesModule } from './about.routes';
import { AboutService } from './about.service';
import { ExperienceComponent } from './experience';
import { EducationComponent } from './education';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutesModule,
    MatExpansionModule
  ],
  declarations: [
    ExperienceComponent,
    EducationComponent,
    AboutComponent
  ],
  exports: [AboutComponent],
  providers: [AboutService]
})
export class AboutModule {
}
