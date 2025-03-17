import { Component, signal } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  imports: [GoogleMap],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {
  center = signal<google.maps.LatLngLiteral>({ lat: 4.6482784, lng: -74.272619 });
  zoom = signal(7);
}
