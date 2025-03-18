import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocusMapService {
  private _center = signal<google.maps.LatLngLiteral>({ lat: 2, lng: -76 });
  center = computed(() => this._center())


  setFocus(lat: number, lng: number) {
    this._center.set({ lat, lng })
  }


}
