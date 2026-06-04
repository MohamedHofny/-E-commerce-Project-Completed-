import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  searchText: string = '';

  constructor(
    private cartService: CartService,
    public productService: ProductService,
    private router: Router
  ) {}

  getFilteredProducts(): IProduct[] {
    return this.productService.products().filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  handleBuy(product: IProduct) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }
}