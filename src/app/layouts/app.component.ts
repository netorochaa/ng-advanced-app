import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
      <p-megaMenu [model]="items"></p-megaMenu>

      <router-outlet></router-outlet>
`,
})
export class AppComponent implements OnInit {
  title = 'ng-advanced-app';

  public items: MegaMenuItem[] | undefined

  ngOnInit(): void {
    this.items = [
      {
        label: 'Página inicial',
        icon: 'pi pi-fw pi-home',
        items: [],
        routerLink: ['']
      },
      {
        label: 'Empregados',
        icon: 'pi pi-fw pi-users',
        items: [],
        routerLink: ['employees']
      }
    ]
  }
}
