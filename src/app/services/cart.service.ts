import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: IProduct[] = [];

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems(): IProduct[] {
    return this.items;
  }

  removeFromCart(product: IProduct) {
    this.items = this.items.filter(item => item.id !== product.id);
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