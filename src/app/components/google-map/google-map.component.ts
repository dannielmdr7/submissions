import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { FocusMapService } from '../../services/focus-map.service';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-google-map',
  imports: [GoogleMap, MapAdvancedMarker, CommonModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent    {
  zoom = 9;
  submissionService = inject(SubmissionsService)
  focusMapService = inject(FocusMapService)

}
