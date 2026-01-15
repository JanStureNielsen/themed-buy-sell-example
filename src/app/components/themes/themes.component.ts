import {Component, inject, signal} from '@angular/core';

import { MatButtonToggleChange, MatButtonToggleModule } from "@angular/material/button-toggle";
import {ThemeManagerService, ThemeMode} from "../../services/theme-manager.service";

export interface ThemeModeOption {
  icon: string;
  mode: ThemeMode;
  label: string;
}

@Component({
    selector: 'fm-themes',
    imports: [
        MatButtonToggleModule
    ],
    templateUrl: './themes.component.html',
    styleUrl: './themes.component.scss'
})
export class ThemesComponent {
  themeService = inject(ThemeManagerService);

  themeModes = signal<ThemeModeOption[]>([
      {
        icon: 'light_mode',
        mode: 'light',
        label: 'Light',
      },
      {
        icon: 'dark_mode',
        mode: 'dark',
        label: 'Dark',
      },
      {
        icon: 'routine',
        mode: 'auto',
        label: 'System',
      },
  ]);

  onThemeModeChange(event: MatButtonToggleChange): void {
    this.themeService.setThemeMode(event.value);
  }
}
