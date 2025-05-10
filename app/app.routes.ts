import { Routes } from '@angular/router';
import {EmptyPageComponent} from '../empty-page/empty-page.component';
import {MainPageComponent} from '../main-page/main-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  { path: '**', component: EmptyPageComponent},
];
