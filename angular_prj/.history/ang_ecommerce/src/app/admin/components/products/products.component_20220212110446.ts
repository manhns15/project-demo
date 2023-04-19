import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(res => {
      if (res) {
        this.products = res;
      }
    })
  }
  getAllCategories() {
    this.productService.getAllCategories().subscribe(res => {
      if (res) {
        this.categories = res;
        console.log(this.categories);

      }
    })
  }
}
