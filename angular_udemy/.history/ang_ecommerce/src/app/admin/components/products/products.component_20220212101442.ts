import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product!: Product
  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(res => {
      if (res) {
        this.product = res;
      }
    })
  }
}
