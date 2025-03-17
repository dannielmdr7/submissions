import { Component, Input } from '@angular/core';
import { StatusEnum } from '../submissions-table/submissions-table.component';

@Component({
  selector: 'app-status-handler',
  imports: [],
  standalone: true,
  templateUrl: './status-handler.component.html',
  styleUrl: './status-handler.component.scss'
})
export class StatusHandlerComponent {
  @Input({ required: true }) status: StatusEnum = StatusEnum.LowRisk;
  statusEnum = StatusEnum;

}
