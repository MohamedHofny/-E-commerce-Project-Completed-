import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: IProduct[] = [];
  orderSuccess: boolean = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.products = this.cartService.getItems();
  }

  removeItem(product: IProduct) {
    this.cartService.removeFromCart(product);
    this.products = [...this.cartService.getItems()];
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  handleCheckout() {
    this.products.forEach(product => {
      this.productService.increaseQuantity(product.id);
    });
    this.cartService.clearCart();
    this.products = [];
    this.orderSuccess = true;
  }
}