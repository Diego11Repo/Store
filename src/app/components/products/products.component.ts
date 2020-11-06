import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductsInterface } from '../../interfaces/products.interface';
import { productTableFixture } from '../../fixtures/product-table.fixture';

/**
 * Angular Decorator
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
/**
 * Products Component class
 */
export class ProductsComponent implements OnInit {
  /**
   * Variable product
   */
  products: ProductsInterface[];

  /**
   * Table headers
   */
  headers: Array<string>;

  /**
   * Constructor
   * @param productsService
   */
  constructor(private productsService: ProductService) {}

  /**
   * ngOnInit funcition
   */
  ngOnInit(): void {
    this.headers = productTableFixture;
    this.fetchProducts();
  }

  /**
   * Function fetchProducts for bring all products
   */
  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
