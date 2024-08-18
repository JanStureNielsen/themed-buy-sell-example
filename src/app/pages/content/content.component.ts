import { Component } from '@angular/core';
import {OrderComponent} from "../../components/order/order.component";

@Component({
  selector: 'fm-content',
  standalone: true,
  imports: [
    OrderComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
