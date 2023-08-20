import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormEmployee } from '../interfaces/Employee.interface';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-store-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, InputTextModule, ButtonModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  @Output() saved = new EventEmitter();

  formEmployee = new FormGroup<IFormEmployee>({
    id: new FormControl(null, [Validators.min(1), Validators.required]),
    first_name: new FormControl('', [Validators.maxLength(255)]),
    last_name: new FormControl('', [Validators.maxLength(255)]),
    email: new FormControl('', [Validators.email]),
    gender: new FormControl('', [Validators.maxLength(255)]),
    avatar: new FormControl('https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg')
  })

  save() {
    const employee = this.formEmployee.value as unknown as IFormEmployee;
    this.saved.emit(employee);
  }
}
