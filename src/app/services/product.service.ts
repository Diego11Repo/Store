import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductsInterface } from '../interfaces/products.interface'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<ProductsInterface[]>('http://localhost:3000/products');
  }
}
