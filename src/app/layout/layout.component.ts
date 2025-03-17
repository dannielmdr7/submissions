import { Component } from '@angular/core';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { ActionsViewComponent } from "../components/actions-view/actions-view.component";

@Component({
  selector: 'app-layout',
  imports: [NavBarComponent, ActionsViewComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
