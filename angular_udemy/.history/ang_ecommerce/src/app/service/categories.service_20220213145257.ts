import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  BASE_URL = 'https://fakestoreapi.com/'
  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    const url = `${this.BASE_URL}/categories`;
    return this.httpClient.get<Category[]>(url).pipe()
  }
}
