import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { StatusEnum, SubmissionsService } from '../../services/submissions.service';
import Swal from 'sweetalert2'
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


  onToggleChange(event: MatButtonToggleChange) {
    this.submissionService.setTypeOfView(event.value);
  }

  onChangeSearch(event: Event) {
    if (!event.target) return;
    const target = event.target as HTMLInputElement;
    this.submissionService.filterByName(target.value);
  }

  onChangeSelectStaus(event: MatSelectChange<StatusEnum>) {
    const status = event.value;
    this.submissionService.filterByStatus(status);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeDate(event: MatDatepickerInputEvent<any, any>) {
    this.submissionService.filterByDate(event.value);
  }

  downloadSubmissions() {
    let timerInterval: ReturnType<typeof setInterval>;
    Swal.fire({
      title: "Downloading submissions",
      html: "Remaining Time <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const popup = Swal.getPopup();
        const timer = popup ? popup.querySelector("b") : null;
        if (timer) {
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

}
