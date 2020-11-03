import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductsInterface } from '../../interfaces/products.interface'

/**
 * Angular Decorator
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
/**
 * Products Component class
 */
export class ProductsComponent implements OnInit {

  /**
   * Variable product for 
   */
  products: ProductsInterface[];

  /**
   * Constructor
   * @param productsService 
   */
  constructor(
    private productsService: ProductService
  ) {}

  /**
   * ngOnInit funcition
   */
  ngOnInit(): void {
    this.fetchProducts();
  }

  /**
   * Function fetchProducts for bring all products
   */
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    })
  }
}
