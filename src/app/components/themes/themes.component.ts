import { Component } from '@angular/core';
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
  selector: 'fm-themes',
  standalone: true,
    imports: [
        MatButtonToggleModule,
    ],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent {
  lightTheme = false;

}
