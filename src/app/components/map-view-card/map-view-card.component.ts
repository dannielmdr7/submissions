import { Component, inject, Input } from '@angular/core';
import { FocusMapService } from '../../services/focus-map.service';
import { Submission } from '../../services/submissions.service';
import { StatusHandlerComponent } from "../status-handler/status-handler.component";

@Component({
  selector: 'app-map-view-card',
  imports: [StatusHandlerComponent],
  standalone: true,
  templateUrl: './map-view-card.component.html',
  styleUrl: './map-view-card.component.scss'
})
export class MapViewCardComponent {
  focusMapService = inject(FocusMapService)
  @Input({ required: true }) submission!: Submission;

  onClick() {
    this.focusMapService.setFocus(this.submission.latitude, this.submission.longitude)
  }
}
