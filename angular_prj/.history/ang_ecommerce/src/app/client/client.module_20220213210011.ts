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
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
