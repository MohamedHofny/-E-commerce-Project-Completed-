import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add-product', component: AddProductComponent },
]