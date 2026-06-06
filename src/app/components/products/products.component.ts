import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  searchText: string = '';
  selectedCategory: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 4;

  categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Dining Tables' },
    { id: 2, name: 'Chairs' },
    { id: 3, name: 'TV Units' },
  ];

  constructor(
    private cartService: CartService,
    public productService: ProductService,
    private router: Router
  ) {}

  getFilteredProducts(): IProduct[] {
    return this.productService.products().filter(p => {
      const matchSearch = p.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchCategory = Number(this.selectedCategory) === 0 || p.categoryID === Number(this.selectedCategory);
      return matchSearch && matchCategory;
    });
  }

  getPaginatedProducts(): IProduct[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.getFilteredProducts().slice(start, end);
  }

  getTotalPages(): number[] {
    const total = Math.ceil(this.getFilteredProducts().length / this.itemsPerPage);
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  handleBuy(product: IProduct) {
  this.cartService.addToCart(product);
  this.productService.decreaseQuantity(product.id);
  this.router.navigate(['/cart']);
}
}
