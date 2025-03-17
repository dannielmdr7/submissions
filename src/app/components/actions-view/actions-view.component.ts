import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

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
  forms = ['Form 1', 'Form 2', 'Form 3'];
  statuses = ['Pending', 'Approved', 'Rejected'];
  view = 'list'; // Valor inicial del toggle (list/map)
  hideSingleSelectionIndicator = signal(false);

  onToggleChange(event: any) {
    console.log('Daniel', { event });

  }

}
