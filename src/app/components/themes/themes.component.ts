import { Component } from '@angular/core';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'fm-themes',
  standalone: true,
    imports: [
      FormsModule,
      MatButtonToggleModule,

    ],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent {
  lightTheme = false;

}
