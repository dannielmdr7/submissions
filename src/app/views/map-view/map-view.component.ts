import { Component, inject } from '@angular/core';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-map-view',
  imports: [
    GoogleMapComponent
  ],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss'
})
export class MapViewComponent {
  submissionService = inject(SubmissionsService)
}
