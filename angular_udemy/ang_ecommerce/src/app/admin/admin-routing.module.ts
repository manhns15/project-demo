import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginAdComponent } from './components/login-ad/login-ad.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterAdComponent } from './components/register-ad/register-ad.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'products/:id', component: ProductDetailComponent
      },
      {
        path: 'posts', component: PostsComponent
      }
    ]
  },
  {
    path: 'login-ad', component: LoginAdComponent
  },
  {
    path: 'register-ad', component: RegisterAdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
