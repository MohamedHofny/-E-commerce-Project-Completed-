import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(
    private cartService: CartService,
    public productService: ProductService,
    private router: Router
  ) {}

  handleBuy(product: IProduct) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }
}