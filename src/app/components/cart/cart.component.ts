import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: IProduct[] = [];

  constructor(private cartService: CartService) {
    this.products = this.cartService.getItems();
  }

  removeItem(product: IProduct) {
    this.cartService.removeFromCart(product);
    this.products = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}