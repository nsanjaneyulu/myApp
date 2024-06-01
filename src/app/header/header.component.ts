import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public items: Array<MenuItem> = [];
  constructor() {
    this.items = [
      {
        label: 'Logout',
        icon: 'esa-icon esa-icon-24 esa-icon-logout',
      },
    ];
  }
}
