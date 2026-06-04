import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  products = signal<IProduct[]>([]);

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<IProduct[]>(this.apiUrl).subscribe(data => {
      this.products.set(data);
    });
  }

  addProduct(product: IProduct) {
    this.http.post<IProduct>(this.apiUrl, product).subscribe(() => {
      this.loadProducts();
    });
  }

  deleteProduct(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.loadProducts();
    });
  }
}