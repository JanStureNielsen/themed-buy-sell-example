import {Component, computed, Input, signal} from '@angular/core';

import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

export type MenuItem = {
  icon: string;
  label: string;
  route: string;

}

@Component({
  selector: 'fm-sidenav',
  standalone: true,
  imports: [
    RouterModule,

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
      route: 'content'
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    }
  ]);

  sidenavCollapsed = signal(false);
  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : '100');

  @Input()
  set collapsed(value: boolean) {
    this.sidenavCollapsed.set(value);
  }

}
