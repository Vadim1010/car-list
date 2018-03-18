import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';

export const AboutRoutes: Routes = [
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(AboutRoutes)
  ],
  exports: [ RouterModule ]
})
export class AboutRoutesModule {}
