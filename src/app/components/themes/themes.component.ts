import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";

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
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRadioModule,
    MatTooltip
  ],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent {
  themeMode: string = 'auto';

  lightTheme = false;

  themeModes = signal<ThemeMode[]>([
      {
        icon: 'light_mode',
        mode: 'light',
        label: 'Light Mode',
      },
      {
        icon: 'dark_mode',
        mode: 'dark',
        label: 'Dark Mode',
      },
      {
        icon: 'routine',
        mode: 'auto',
        label: 'System Mode',
      },
  ]);

}
