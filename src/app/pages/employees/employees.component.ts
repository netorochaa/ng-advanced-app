import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EmployeeService } from './service/employee-service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { IEmployee } from './interfaces/Employee';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  imports: [CommonModule, HttpClientModule, TableModule, AvatarModule],
  providers: [EmployeeService],
  standalone: true,
})
export class EmployeesComponent implements OnInit {
  constructor(readonly employeeService: EmployeeService) {}

  employees$!: Observable<IEmployee[]>;

  ngOnInit(): void {
    this.employees$ = this.employeeService.get();
  }
}
