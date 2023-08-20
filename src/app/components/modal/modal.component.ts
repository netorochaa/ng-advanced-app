import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
})
export class ModalComponent {
  @Input() visible!: boolean;
  @Input() title!: string;

  constructor() {
    if(!this.visible) {
      this.visible = false;
      this.title = 'Cadastro de empregado'
    }
  }
}
