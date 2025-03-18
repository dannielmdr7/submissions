import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { ActionsViewComponent } from "../components/actions-view/actions-view.component";
import { SubmissionsTableComponent } from '../components/submissions-table/submissions-table.component';
import { SubmissionsService } from '../services/submissions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    ActionsViewComponent,
    NavBarComponent,
    SubmissionsTableComponent,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  submissionService = inject(SubmissionsService);

}
