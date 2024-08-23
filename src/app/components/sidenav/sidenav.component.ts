import { Component, computed, Input, signal } from '@angular/core';

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";

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
    FormsModule,

    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  sidenavCollapsed = signal(false);
  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : '100');

  @Input()
  set collapsed(value: boolean) {
    this.sidenavCollapsed.set(value);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'chevron_right',
      label: 'Order',
      route: 'content'
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: 'settings'
    },
  ]);

}
