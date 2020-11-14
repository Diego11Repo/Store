import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductsInterface } from '../../interfaces/products.interface';
import { productTableFixture } from '../../fixtures/product-table.fixture';
import { ModalService } from 'src/app/services/modal.service';

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
  constructor(
    private productsService: ProductService,
    private modalService: ModalService
  ) {}

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

  /**
   * Function on click in edit product
   */
  handleEdit = (id: number) => {
    this.modalService.setModalLabel('edit');
    this.modalService.setModalStatus(true);
    this.productsService.getProduct(id);
  };

  /**
   * Function on click in delete product
   */
  handleDelete = (id: number) => {
    this.modalService.setModalLabel('delete');
    this.modalService.setModalStatus(true);
    this.productsService.getProduct(id);
  };
}
