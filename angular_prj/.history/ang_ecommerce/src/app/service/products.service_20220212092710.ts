import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = 'https://fakestoreapi.com/'
  constructor(private httpClient: HttpClient) { }
}
