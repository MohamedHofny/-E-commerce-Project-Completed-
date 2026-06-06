import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.productService.products().find(p => p.id === id);
    if (found) {
      this.product = { ...found };
    }
  }

  handleEdit() {
    this.productService.updateProduct(this.product);
    this.router.navigate(['/dashboard']);
  }
}
