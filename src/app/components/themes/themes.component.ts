import {Component, inject, signal} from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MatButtonToggleChange, MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
import {ThemeManagerService, ThemeMode} from "../../services/theme-manager.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";

export interface ThemeModeOption {
  icon: string;
  mode: ThemeMode;
  label: string;
}

@Component({
    selector: 'fm-themes',
    imports: [
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatMenuModule,
        MatRadioModule,
        MatToolbarModule,
        MatTooltipModule
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
