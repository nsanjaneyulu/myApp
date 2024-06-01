import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints,  BreakpointState, LayoutModule } from '@angular/cdk/layout';
import { NavigationMenuItemConfig } from '../utils/menuConfig';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    DividerModule,
    ImageModule,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  esaMenus: any;
  isExpanded: boolean = false;
  @Output() flagSignal = new EventEmitter<boolean>();
  constructor(
    private router: Router,private breakpointObserver: BreakpointObserver
  ) {
    this.setMenuItems();
  }
  setMenuItems() {
    this.esaMenus = [];
    const currentUrl = this.router.url;
    NavigationMenuItemConfig.forEach((screen: any) => {
      const isActive =
        currentUrl.toLowerCase() === screen?.value.path.toLowerCase();

      const menutSetting = this.getMenuEntry(
        isActive ? true : false,
        screen.displayName,
        screen?.value.path!,
        screen?.value.icon,
        screen.displayName
      );
      this.esaMenus.push(menutSetting);
    });


  }
  public toggleClass() {
    this.isExpanded = !this.isExpanded;

    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.flagSignal.emit(this.isExpanded);
        } else {
          this.flagSignal.emit(false);
        }
      });
  }
  private getMenuEntry(
    isActive: boolean,
    title: string,
    href: string,
    icon?: string,
    tooltip?: string,
    styleClass?: string
  ): MenuItem {
    return {
      title,
      tooltip: tooltip ?? title,
      styleClass: `esa-menu-link ${styleClass}`,
      icon: icon ?? '',
      routerLink: href,
      isActive: isActive,
    } as MenuItem;
  }
}