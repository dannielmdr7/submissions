import { Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actions-view',
  imports: [
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
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
