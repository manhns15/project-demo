import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BannerProductComponent } from './components/shares/banner-product/banner-product.component';
import { BannerHomeComponent } from './components/shares/banner-home/banner-home.component';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/shares/explore/explore.component';
import { ProductsComponent } from './components/products/products.component';
import { PostsComponent } from './components/posts/posts.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerAboutComponent } from './components/shares/banner-about/banner-about.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    ClientComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerProductComponent,
    BannerHomeComponent,
    HomeComponent,
    ExploreComponent,
    ProductsComponent,
    PostsComponent,
    AboutComponent,
    ContactComponent,
    BannerAboutComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
