import { Component } from '@angular/core';

import { allEmployees } from '../Employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employeeData = allEmployees;
}
