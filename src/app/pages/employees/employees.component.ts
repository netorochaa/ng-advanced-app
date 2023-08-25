import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { EmployeeService } from './service/employee-service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { IEmployee } from './interfaces/Employee.interface';
import { AvatarModule } from 'primeng/avatar';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { StoreComponent } from './store/store.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  imports: [CommonModule, HttpClientModule, TableModule, AvatarModule, ButtonModule, ModalComponent, StoreComponent],
  providers: [EmployeeService],
  standalone: true,
})
export class EmployeesComponent implements OnInit {
  public modal = false;

  constructor(readonly employeeService: EmployeeService) {}

  employees$!: Observable<IEmployee[]>;

  ngOnInit(): void {
    this.employees$ = this.employeeService.get();
  }

  toggleModal(): void {
    this.modal = !this.modal;
  }

  addToList(employee: IEmployee) {
    this.employees$ = this.employees$.pipe(map(employees => [employee, ...employees]))
    this.toggleModal();
  }
}
