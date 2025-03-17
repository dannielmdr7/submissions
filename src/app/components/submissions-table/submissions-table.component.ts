import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StatusHandlerComponent } from '../status-handler/status-handler.component';
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
  ELEMENT_DATA:Submission[] = [
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.LowRisk, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', dueDate: '2025-10-06T02:38:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Unassigned, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4140 Parker Rd. Allentown, New Mexico 31134', dueDate: '2025-10-07T01:14:00', selected: false },
    { task: 'Work Flow: Requires Location', status: StatusEnum.Uncomplete, from: 'zendu@zendu.com', to: 'tracy@zenduit.com', address: '4517 Washington Ave. Manchester, Kentucky 39495', dueDate: '2025-10-07T03:56:00', selected: false },

  ];
  displayedColumns: string[] = ['select', 'task', 'status', 'from', 'to', 'address', 'dueDate'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Método para asignar clases según el estado
  getStatusClass(status: string): string {
    switch (status) {
      case 'Low Risk': return 'status-low-risk';
      case 'Uncomplete': return 'status-uncomplete';
      case 'Unassigned': return 'status-unassigned';
      default: return '';
    }
  }

  // Verificar si la fecha está vencida
  isPastDue(date: string): boolean {
    return new Date(date) < new Date();
  }
}

export enum StatusEnum {
  LowRisk = 'Low Risk',
  Unassigned = 'Unassigned',
  Uncomplete = 'Uncomplete',
}

export interface Submission {
  task: string;
  status: StatusEnum;
  from:string;
  to:string;
  address:string;
  dueDate:string;
  selected:boolean;
  latitude?:number;
  longitude?:number;
}
