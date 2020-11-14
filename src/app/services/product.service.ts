import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductsInterface } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /**
   * Id
   */
  id: number;

  /**
   *
   * @param http Http client
   */
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<ProductsInterface[]>('http://localhost:3000/products');
  }

  getProduct(id: number) {
    this.id = id;
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  giveId() {
    return this.id;
  }

  editProduct(id: number, changes: any) {
    return this.http.put(`http://localhost:3000/products/${id}`, changes);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
