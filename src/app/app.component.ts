import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { OrderComponent } from "./components/order/order.component";
import {MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {SidenavComponent} from "./components/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,

    FooterComponent,
    HeaderComponent,
    OrderComponent,
    SidenavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
