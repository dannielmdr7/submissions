import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-actions-view',
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  standalone: true,
  templateUrl: './actions-view.component.html',
  styleUrl: './actions-view.component.scss'
})
export class ActionsViewComponent {
  submissionService = inject(SubmissionsService);


  onToggleChange(event: any) {
    this.submissionService.setTypeOfView(event.value);
  }

}
