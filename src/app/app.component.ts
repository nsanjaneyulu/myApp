import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { PdfViewerComponent } from "./pdf-viewer/pdf-viewer.component";
import { ScrollTopModule } from 'primeng/scrolltop';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { BlockableUI, FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, ContentComponent, PdfViewerComponent, BlockUIModule, ScrollTopModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  blockdatas: boolean = false;
  title = 'learnApp';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private el: ElementRef
  ) {}
  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }

  flagSignalselection($event: any) {
    if ($event) {
      this.blockdatas = true;
    } else {
      this.blockdatas = false;
    }
  }
}
