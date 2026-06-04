import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    imgURL: '',
    categoryID: 1,
    matrial: '',
    description: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  handleAddProduct() {
    this.product.id = Math.floor(Math.random() * 10000);
    this.productService.addProduct(this.product);
    this.router.navigate(['/']);
  }
}