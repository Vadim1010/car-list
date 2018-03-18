import { Routes } from '@angular/router';
import { NoContentComponent } from './features/no-content';
import { AboutModule } from './features';

export const AppRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'about', loadChildren: () => AboutModule},
  // {path: 'about', loadChildren: './features/about/about.module#AboutModule'},
  {path: '**', component: NoContentComponent},
];
