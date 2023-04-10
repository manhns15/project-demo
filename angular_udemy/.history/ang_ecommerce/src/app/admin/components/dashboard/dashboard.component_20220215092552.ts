import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productsLimit: Product[] = []
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getLimitProducts().subscribe(res => {
      console.log(res);
      if (res) {
        this.productsLimit = res;
      }

    })
  }

}
