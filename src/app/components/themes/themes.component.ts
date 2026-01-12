import {Component, inject, signal} from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltip, MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
import {ThemeManagerService} from "../../services/theme-manager.service";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatMenu, MatMenuModule} from "@angular/material/menu";

/**
 * Angular Material Symbols:
 *
 *   light_mode -- light mode
 *   dark_mode  -- dark mode
 *   routine    -- system mode
 */

export type ThemeMode = {
  icon: string;
  mode: string;
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
  themeMode: string = 'auto';

  themeModes = signal<ThemeMode[]>([
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

}
