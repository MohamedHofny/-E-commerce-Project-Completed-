import { Injectable, signal } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<IProduct[]>([]);

  constructor() {
    this.products.set(this.loadFromStorage());
  }

  private loadFromStorage(): IProduct[] {
    const stored = localStorage.getItem('products');
    if (stored) {
      return JSON.parse(stored);
    }
    return [
      {
        id: 1,
        name: 'Odense 8-Seater Top Dining Table',
        price: 2150000,
        quantity: 23,
        imgURL: 'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        matrial: 'Engineered Wood',
        description: 'Lorem ipsum dolor sit, amet consectetur ullam quo.',
      },
      {
        id: 2,
        name: 'Trixia 4-Seater Glass Dining Table',
        price: 31240000,
        quantity: 8,
        imgURL: 'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        matrial: 'Metal',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
      {
        id: 3,
        name: 'Gasha Marble Top Side Table',
        price: 1154000,
        quantity: 10,
        imgURL: 'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        matrial: 'Metal',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
      {
        id: 4,
        name: 'Ventura Fabric Dining Chair',
        price: 12346500,
        quantity: 2,
        imgURL: 'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        matrial: 'Upholstered Seating',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
      {
        id: 5,
        name: 'Boston Study Chair',
        price: 11000,
        quantity: 10,
        imgURL: 'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        matrial: 'Upholstered Seating',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
      {
        id: 6,
        name: 'Coby Extendable TV Unit',
        price: 112000,
        quantity: 0,
        imgURL: 'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        matrial: 'Wood',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
      {
        id: 7,
        name: 'Accent TV Unit',
        price: 136999,
        quantity: 4,
        imgURL: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        matrial: 'MDF',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
      {
        id: 8,
        name: 'Plymouth TV Unit',
        price: 136999,
        quantity: 1,
        imgURL: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        matrial: 'wood',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
    ];
  }

  addProduct(product: IProduct) {
    this.products.update(products => {
      const updated = [...products, product];
      localStorage.setItem('products', JSON.stringify(updated));
      return updated;
    });
  }

  deleteProduct(id: number) {
    this.products.update(products => {
      const updated = products.filter(p => p.id !== id);
      localStorage.setItem('products', JSON.stringify(updated));
      return updated;
    });
  }

  updateProduct(updatedProduct: IProduct) {
    this.products.update(products => {
      const updated = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
      localStorage.setItem('products', JSON.stringify(updated));
      return updated;
    });
  }

  decreaseQuantity(id: number) {
    this.products.update(products => {
      const updated = products.map(p =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      );
      localStorage.setItem('products', JSON.stringify(updated));
      return updated;
    });
  }

  increaseQuantity(id: number) {
    this.products.update(products => {
      const updated = products.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      );
      localStorage.setItem('products', JSON.stringify(updated));
      return updated;
    });
  }
}