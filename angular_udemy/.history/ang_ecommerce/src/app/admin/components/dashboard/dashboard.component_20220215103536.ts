import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productsLimit: Product[] = [];
  id?: string;
  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getLimitProducts().subscribe(res => {
      console.log(res);
      if (res) {
        this.productsLimit = res;
      }

    })
  }
  goDetail(id?: string) {
    this.router.navigateByUrl(`admin/products/${id}`);
  }
  goProducts() {
    this.router.navigateByUrl(`admin/products`);
  }

}
