import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';

@Component({
  selector: 'app-root',
  imports: [ LayoutComponent, GoogleMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'submissions';
}
