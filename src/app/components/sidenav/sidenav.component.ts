import { Component, signal } from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

export type MenuItem = {
  icon: string;
  label: string;
  route: string;

}

@Component({
  selector: 'fm-sidenav',
  standalone: true,
  imports: [
    MatIconModule,
    MatListModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'videos'
    },
    {
      icon: 'dashboard',
      label: 'Analytics',
      route: 'analytics'
    }
  ]);
}
