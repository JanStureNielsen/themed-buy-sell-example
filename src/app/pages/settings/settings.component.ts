import { Component } from '@angular/core';
import {ThemesComponent} from "../../components/themes/themes.component";

@Component({
  selector: 'fm-settings',
  standalone: true,
  imports: [
    ThemesComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
