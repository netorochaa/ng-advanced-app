import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin: 0 4rem;">
      <p-megaMenu [model]="items"></p-megaMenu>

      <router-outlet></router-outlet>
    </div>
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
        routerLink: ['home'],
      },
      {
        label: 'Empregados',
        icon: 'pi pi-fw pi-users',
        routerLink: ['employees'],
      }
    ]
  }
}
