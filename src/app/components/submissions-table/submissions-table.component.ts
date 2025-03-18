import { Component, effect, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StatusHandlerComponent } from '../status-handler/status-handler.component';
import { SubmissionsService } from '../../services/submissions.service';
@Component({
  selector: 'app-submissions-table',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    StatusHandlerComponent
  ],
  templateUrl: './submissions-table.component.html',
  styleUrl: './submissions-table.component.scss'
})

export class SubmissionsTableComponent {
  submissionService  = inject(SubmissionsService)

  displayedColumns: string[] = ['select', 'task', 'status', 'from', 'to', 'address', 'dueDate'];
  dataSource = new MatTableDataSource(this.submissionService.submissions());
  constructor() {
    effect(() => {
      this.dataSource = new MatTableDataSource(this.submissionService.submissions());
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isPastDue(date: string): boolean {
    return new Date(date) > new Date();
  }

  formatPastDue(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: 'short', // Abreviatura del mes (e.g., "Oct")
      day: 'numeric', // Día del mes (e.g., "17")
      hour: 'numeric', // Hora (e.g., "5")
      minute: 'numeric', // Minutos (e.g., "39")
      hour12: true // Formato de 12 horas con AM/PM
    };

    return date.toLocaleString('en-US', options);
  }
}

