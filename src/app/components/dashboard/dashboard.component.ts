import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public productService: ProductService) {}

  deleteProduct(product: IProduct) {
    this.productService.deleteProduct(product.id);
  }
}