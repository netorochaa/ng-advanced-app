import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee, IFormEmployee } from '../interfaces/Employee.interface';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-store-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, InputTextModule, ButtonModule, MessagesModule],
  providers: [MessageService],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  @Output() saved = new EventEmitter();

  initialForm: any;

  formEmployee = new FormGroup<IFormEmployee>({
    id: new FormControl(null, [Validators.min(1), Validators.required]),
    first_name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    avatar: new FormControl('https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg')
  })

  constructor(private messageService: MessageService) {
    this.initialForm = this.formEmployee.value;
  }

  save() {
    this.messageService.clear();
    if(this.formEmployee.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Formulário inválido.' });

      return;
    }

    const employee = this.formEmployee.value as unknown as IFormEmployee;
    this.saved.emit(employee);

    this.formEmployee.reset(this.initialForm);
  }
}
