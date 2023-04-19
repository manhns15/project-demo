import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = 'https://fakestoreapi.com/'
  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product> {
    const url = `${this.BASE_URL}products`;
    return this.httpClient.get<Product>(url).pipe(
      // catchError(this.handleErrorr)
    )
  }

  getProduct(id: string) {
    const url = `${this.BASE_URL}products/${id}`;
    return this.httpClient.get<Product>(url).pipe(

    )
  }

  getAllCategories(): Observable<Category> {
    const url = `${this.BASE_URL}products/categories`;
    return this.httpClient.get<Category>(url).pipe()
  }
}
