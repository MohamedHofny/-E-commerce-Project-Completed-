import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: IProduct[] = [];

  constructor(private productService: ProductService) {}

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems(): IProduct[] {
    return this.items;
  }

  removeFromCart(product: IProduct) {
    this.items = this.items.filter(item => item.id !== product.id);
    this.productService.increaseQuantity(product.id);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getCount(): number {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
  }
}