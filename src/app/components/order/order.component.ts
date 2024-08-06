import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatLabel} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";

@Component({
  selector: 'fm-order',
  standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatLabel,
        MatSliderModule,
    ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  isSell: boolean = false;

  units = 1;
  unitsMin = 1;
  unitsMax = 10;
  unitsStep = 1;

  price = 500;
  priceMin = 0;
  priceMax = 1000;
  priceStep = 25;

  buyColor() {
    return this.isSell ? '' : 'buy';
  }

  sellColor() {
    return this.isSell ? 'sell' : '';
  }

  color() {
    return this.isSell ? 'sell' : 'buy';
  }

  colorSlider() {
    return this.isSell ? 'sell-slider' : 'buy-slider';
  }

  colorMaterial() {
    return this.isSell ? 'primary' : 'accent';
  }

}
