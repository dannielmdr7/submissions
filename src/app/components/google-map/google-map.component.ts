import { Component, signal } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {
  locations: google.maps.LatLngLiteral[] = [
    { lat: 4.6482784, lng: -74.272619 },
    { lat: 4.1, lng: -74.8 },
  ]
  center = signal<google.maps.LatLngLiteral>({ lat: 4.6482784, lng: -74.272619 });
  zoom = signal(7);
}
