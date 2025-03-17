import { Component } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';

interface NavBarItem {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-nav-bar',
  imports: [NavItemComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  title = 'ZenduForms';
  navBarOptions: NavBarItem[] = [
    { name: 'Forms', icon: 'forms-icon.svg' },
    { name: 'Customers', icon: 'customers-icon.svg' },
    { name: 'Submissions', icon: 'submissions-icon.svg' },
    { name: 'History', icon: 'history-icon.svg' },
    { name: 'Reports', icon: 'reports-icon.svg' },
    { name: 'Workflow', icon: 'reports-icon.svg' }
  ]

}
