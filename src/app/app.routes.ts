import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AnalyticsComponent} from "./pages/analytics/analytics.component";
import {ContentComponent} from "./pages/content/content.component";
import {SettingsComponent} from "./pages/settings/settings.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
