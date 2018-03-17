import { Routes } from '@angular/router';
import { NoContentComponent } from './features/no-content';

export const AppRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NoContentComponent},
];
