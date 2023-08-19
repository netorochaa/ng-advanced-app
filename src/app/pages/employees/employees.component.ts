import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EmployeeService } from './service/employee-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  imports: [CommonModule, HttpClientModule],
  providers: [EmployeeService],
  standalone: true,
})
export class EmployeesComponent implements OnInit {
  constructor(readonly employeeService: EmployeeService) {}

  employees$!: Observable<any>;

  ngOnInit(): void {
    this.employees$ = this.employeeService.get();
  }
}
