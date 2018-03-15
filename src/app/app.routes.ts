import { Routes } from '@angular/router';
import { NoContentComponent } from './features/no-content';

export const ROUTES: Routes = [
  { path: '**',    component: NoContentComponent },
];
