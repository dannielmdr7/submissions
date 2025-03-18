import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { StatusEnum, SubmissionsService } from '../../services/submissions.service';

interface SelectStatusEnum {
  value: string;
  status: StatusEnum;
}
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
  statuses: SelectStatusEnum[] = [
    { value: 'Low Risk', status: StatusEnum.LowRisk },
    { value: 'Unassigned', status: StatusEnum.Unassigned },
    { value: 'Uncomplete', status: StatusEnum.Uncomplete },
  ]


  onToggleChange(event: any) {
    this.submissionService.setTypeOfView(event.value);
  }

  onChangeSearch(event: Event) {
    if (!event.target) return;
    const target = event.target as HTMLInputElement;
    this.submissionService.filterByName(target.value);
  }

  onChangeSelectStaus(event: MatSelectChange<any>) {
    const status = event.value;
    this.submissionService.filterByStatus(status);
  }

  onChangeDate(event:MatDatepickerInputEvent<any, any>){
    this.submissionService.filterByDate(event.value);
    console.log('Daniel',{event});
  }

}
