import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoriesService } from 'src/app/service/categories.service';
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
    private categoryService: CategoriesService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
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
    this.categoryService.getAllCategories().subscribe(res => {
      if (res) {
        this.categories = res;
        console.log(this.categories);
      }
    })
  }

  onAddProduct() {
    let pro = {
      name: this.iF.name.value,
      category: this.iF.category.value,
      image: this.iF.image.value,
      price: this.iF.price.value,
      quantity: this.iF.quantity.value,
      description: this.iF.description.value
    }

    this.productService.createProduct(pro).subscribe(res => {

      console.log(res);
      // this.form.reset();
      // $('#editorProduct').modal('hide')
      this.getAllProducts();

    })
  }
  subPro(id: any) {
    this.checkSave = true;
    this.id = id;
    this.productService.getProduct(id).subscribe(res => {
      this.iF.name.setValue(res.name);
      this.iF.category.setValue(res.category);
      this.iF.image.setValue(res.image);
      this.iF.price.setValue(res.price);
      this.iF.quantity.setValue(res.quantity);
      this.iF.description.setValue(res.description);
    })

  }
  onEditProduct() {
    let pro = {
      id: this.id,
      name: this.iF.name.value,
      category: this.iF.category.value,
      image: this.iF.image.value,
      price: this.iF.price.value,
      quantity: this.iF.quantity.value,
      description: this.iF.description.value
    }

    this.productService.updateProduct(pro, this.id).subscribe(res => {

      console.log(res);
      // this.form.reset();
      // $('#editorProduct').modal('hide')
      this.getAllProducts();

    })
  }
}
