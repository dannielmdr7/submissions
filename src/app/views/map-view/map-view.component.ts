import { Component, inject } from '@angular/core';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { SubmissionsService } from '../../services/submissions.service';
import { MapViewCardComponent } from "../../components/map-view-card/map-view-card.component";

@Component({
  selector: 'app-map-view',
  imports: [
    GoogleMapComponent,
    MapViewCardComponent
],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss'
})
export class MapViewComponent {
  submissionService = inject(SubmissionsService)
}
