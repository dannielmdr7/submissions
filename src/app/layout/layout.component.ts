import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActionsViewComponent } from "../components/actions-view/actions-view.component";
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { SubmissionsService } from '../services/submissions.service';
import { ListViewComponent } from '../views/list-view/list-view.component';

@Component({
  selector: 'app-layout',
  imports: [
    ActionsViewComponent,
    NavBarComponent,
    CommonModule,
    ListViewComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  submissionService = inject(SubmissionsService);

}
