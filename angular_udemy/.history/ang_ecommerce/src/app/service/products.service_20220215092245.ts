import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    const url = `${this.BASE_URL}products`;
    return this.httpClient.get<Product[]>(url).pipe(
      // catchError(this.handleErrorr)
    )
  }

  getProduct(id: string) {
    const url = `${this.BASE_URL}products/${id}`;
    return this.httpClient.get<Product>(url).pipe(

    )
  }
  getLimitProducts() {
    const url = `${this.BASE_URL}products?_limit=5`
  }

  createProduct(data: Product) {
    const url = `${this.BASE_URL}products`;
    const body: Product = data
    return this.httpClient.post<Product>(url, body).pipe(

    )
  }

  updateProduct(data: Product, id: string) {
    const url = `${this.BASE_URL}products/${id}`;
    const body: Product = data
    return this.httpClient.put<Product>(url, body).pipe(

    )
  }

  deleteProduct(id: string) {
    const url = `${this.BASE_URL}products/${id}`;
    return this.httpClient.delete(url).pipe(

    )
  }
}
