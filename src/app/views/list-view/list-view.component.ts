import { Component, effect, inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StatusHandlerComponent } from '../../components/status-handler/status-handler.component';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-list-view',
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
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent implements AfterViewInit {
  submissionService = inject(SubmissionsService)

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
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    return date.toLocaleString('en-US', options);
  }

}
