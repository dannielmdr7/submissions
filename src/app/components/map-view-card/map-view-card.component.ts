import { Component, Input } from '@angular/core';
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
  @Input({ required: true }) submission!: Submission;
}
