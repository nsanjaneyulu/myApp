import { Component } from '@angular/core';
import { ContentImportsModule } from './contentModule';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../domain/customer.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContentImportsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  customers!: Customer[];
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
      
  }
}
