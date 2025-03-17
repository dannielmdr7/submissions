import { Component, inject, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Verificar si la fecha está vencida
  isPastDue(date: string): boolean {
    return new Date(date) < new Date();
  }
}

