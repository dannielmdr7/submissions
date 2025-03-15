import { Component } from '@angular/core';

interface NavBarItem{
  name:string;
  icon:string;
}

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  title = 'ZenduForms';
  navBarOptions: NavBarItem[] = [
    {name: 'Forms', icon: ''},
    {name: 'Customers', icon: ''},
    {name: 'Submissions', icon: ''},
    {name: 'History', icon: ''},
    {name: 'Reports', icon: ''},
    {name: 'Workflow', icon: ''}
  ]

}
