import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
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
  product!: Product
  id!: string;
  constructor(
    private productService: ProductsService,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getProductById();
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

  getProductById() {
    this.activeRoute.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id') as string;
        return this.productService.getProduct(this.id);
      })
    ).subscribe(res => {
      console.log(res);
      this.product = res

    })
  }
}
