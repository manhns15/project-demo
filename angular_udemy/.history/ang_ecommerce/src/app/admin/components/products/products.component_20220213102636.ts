import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  id!: any;
  form!: FormGroup;
  checkSave!: any;
  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],

    })
    console.log(this.form);

    this.getAllProducts();
    this.getAllCategories();
  }
  get iF(): any {
    return this.form.controls;
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

  onAddProduct() {
    let pro = {
      title: this.iF.title.value,
      image: this.iF.image.value,
      price: this.iF.price.value,
      category: this.iF.category.value,
      description: this.iF.description.value
    }

    this.productService.createProduct(pro).subscribe(res => {

      console.log(res);
      this.form.reset();
      // $('#editorProduct').modal('hide')
      this.getAllProducts();

    })
  }
}
